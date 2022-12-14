import "./Cart.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [check, setChecked] = useState(true);
  const [checkList, setCheckList] = useState(true);
  const CryptoJS = require("crypto-js");
  const token = localStorage.getItem("token");
  const username = CryptoJS.enc.Base64.parse(token).toString(CryptoJS.enc.Utf8);
  const [disabled, setDisabled] = useState(true);

  const MySwal = withReactContent(Swal);

  let money = 0.0;
  let total = 0;

  function noneDisplay() {
    document.getElementById("ConfirmCart").style.display = "none";
  }

  function nothingDisplay() {
    document.getElementById("ConfirmCart").style.display = "";
  }

  const checkToken = () => {
    if (token == null) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const initProducts = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: username,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/getCarts", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        setChecked(false);
        console.log(result);
        if (result.length != 0) {
          nothingDisplay();
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    noneDisplay();
    initProducts();
  }, []);

  const plus = (quantityInStock, quantityInCart) => {
    if(quantityInStock <= quantityInCart){
      MySwal.fire({
        title: <strong>Stock Limit</strong>,
        icon: "error",
      })
    }else{
      const IDProduct = localStorage.getItem("IDProduct");
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        username: username,
        productCode: IDProduct,
      });
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch("http://127.0.0.1:8000/api/addToCart", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          window.location.href = "/cart";
        })
        .catch((error) => console.log("error", error));
    }
    
  };

  const minus = () => {

    const IDProduct = localStorage.getItem("IDProduct");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IldHQXF5UzNuM0NkQ0pZQ3huQ3hJSkE9PSIsInZhbHVlIjoiWU1aeVhBQUNZYmpLc1BITytPL0Z4VDhMTStiQUdBVzJ0d2ZoSGNCeU5RYmF3aXRDbUQzZDBaWHJTYklrQUI2NVBSR1BHd3BQTnNoTFdPSHR2Sll0dWFMTDFjd3JLMEpjeHNBZ3dKY1RBekFLSG5EWHRiQk1XNXJBc2lCTjhEMG4iLCJtYWMiOiI2ZjgwZGFhZWM1NTA0NzkzMDBkM2IwYmVjMDM2ZjAwNDUxNzNjOGIzNTU5NGYzMzEzODdlMzUyMTU4MzQxMjU5IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6ImVLS25tSS95QS9BMmE5a0NmL0p6YWc9PSIsInZhbHVlIjoiWklzU05TWXlWVVc1ZEI5QVNwQUVWQUd4OHhJTkkwbTFqRVFrUnd1M0dYZExvd0N3b3JnNEo5aXVRQ2Fqc2F4L3Q2am5VWnhJRy9NV2VjL3ZNMFUyQzB4b3lQcTRxcTZIbFZMQ21ZaUh3NGlsVWdmaEtJTXFaVzJDUkpUYzBrMFkiLCJtYWMiOiIxOTdlODg2NTZmNTVjMDgzNTQwNTg3YmVlNGUxMTVkOTY3NjM2ZTFlZDJlOTA4ZWQxY2Y4MWNmMGIxYTA0NzAyIiwidGFnIjoiIn0%3D"
    );

    var raw = JSON.stringify({
      username: username,
      productCode: IDProduct,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/decreaseFromCart", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        window.location.href = "/cart";
      })
      .catch((error) => console.log("error", error));
  };

  const deleteProduct = () => {
    const IDProduct = localStorage.getItem("IDProduct");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: username,
      productCode: IDProduct,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/deleteFromCart", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        MySwal.fire({
          title: <strong>Delete Success</strong>,
          icon: "success",
        }).then((value) => {
          window.location.href = "/cart";
        });
      })
      .catch((error) => console.log("error", error));
  };

  const handleMouseMove = (IDProduct) => {
    localStorage.setItem("IDProduct", IDProduct);
  };

  const sendOrder = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    var h = ("00" + today.getHours()).slice(-2);
    var m = ("00" + today.getMinutes()).slice(-2);
    var s = ("00" + today.getSeconds()).slice(-2);

    var newDD = parseInt(dd) + 7;
    var newMM = parseInt(mm);

    if (newMM % 2 == 0) {
      if (newMM == 2) {
        if (newDD > 28) {
          newMM += 1;
          newDD -= 28;
        }
      } else {
        if (newDD > 30) {
          newMM += 1;
          newDD -= 30;
        }
      }
    } else {
      if (newDD > 31) {
        newMM += 1;
        newDD -= 31;
      }
    }

    const orderDate = yyyy + "-" + mm + "-" + dd + " ";
    const requireDate = yyyy + "-" + newMM + "-" + newDD + " ";
    const time = h + ":" + m + ":" + s;

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: username,
      order: {
        orderDate: orderDate + time,
        requiredDate: requireDate + time,
        shippedDate: null,
        status: "In Process",
        comments: "dark",
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(requestOptions);

    fetch("http://127.0.0.1:8000/api/storeOrders", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        window.location.href = "/cart";
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = (quantityInStock, quantityInCart) => {
    const credit = localStorage.getItem("credit");

    if (money > credit) {
      MySwal.fire({
        title: <strong>Not enough money</strong>,
        icon: "error",
      })
    } else {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      let newDate = year + "-" + month + "-" + day;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username: username,
        payment: {
          paymentDate: newDate,
          amount: money,
        },
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://127.0.0.1:8000/api/storePayments", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result.status === "store payments ok") {
            MySwal.fire({
              title: <strong>Pay Success</strong>,
              icon: "success",
            }).then((value) => {
              minusCredit();
              sendOrder();
            });
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  const minusCredit = () => {
    const credit = localStorage.getItem("credit");
    const mon = parseFloat(credit) - money;
    const r = 5555;

    // console.log(typeof(5555));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: username,
      //   addressLine2: mon
      //   creditLimit: parseFloat(credit).toFixed(2)
      creditLimit: mon.toFixed(2),
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    // localStorage.setItem("credit", mon);
    fetch("http://127.0.0.1:8000/api/updateProfile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("credit", mon.toFixed(2));
      })
      .catch((error) => console.log("error", error));
  };

  const listOfItem = () => {
    if (check) {
      return <h1>Loading . . .</h1>;
    } else {
      const listItem = products.map(function (tasks) {
        money += tasks.quantityInCart * tasks.buyPrice;
        total = tasks.quantityInCart * tasks.buyPrice;
        return (
          <div onMouseMove={() => handleMouseMove(tasks.productCode)}>
            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage
                  src={tasks.url}
                  fluid
                  className="rounded-3"
                  alt="Cotton T-shirt"
                />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <MDBTypography tag="h6" className="text-muted">
                  {tasks.productName}
                </MDBTypography>
                <MDBTypography tag="h6" className="text-black mb-0">
                  {tasks.productLine}
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="2" className="text-end">
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/2569/2569198.png "
                  width="30"
                  height="30"
                  alt=""
                  title=""
                  class="img-small"
                  type="submit"
                  style={{ margin: "5px" }}
                  onClick={minus}
                />
                {tasks.quantityInCart >= tasks.quantityInStock ? tasks.quantityInStock : tasks.quantityInCart}
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/4315/4315609.png "
                  width="30"
                  height="30"
                  alt=""
                  title=""
                  class="img-small"
                  type="submit"
                  style={{ margin: "5px" }}
                  onClick={() => {plus(tasks.quantityInStock, tasks.quantityInCart)}}
                />
              </MDBCol>

              <MDBCol md="3" lg="1" xl="2" className="text-end">
                <MDBTypography tag="h6" className="mb-0">
                  {total.toFixed(2)} $
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <img
                  src="   https://cdn-icons-png.flaticon.com/512/484/484611.png "
                  width="30"
                  height="30"
                  alt=""
                  title=""
                  class="img-small"
                  type="submit"
                  onClick={deleteProduct}
                />
              </MDBCol>
            </MDBRow>

            <hr className="my-4" />
          </div>
        );
      });
      //   setCheckPic(false)
      return <div>{listItem}</div>;
    }
  };

  return (
    <section
      className="h-100 h-custom"
      style={{ fontFamily: "JetBrains Mono" }}
    >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />
                      {listOfItem()}
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText
                            tag="a"
                            href="/shop"
                            className="text-body"
                          >
                            <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                            to shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          {products.length} items
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          {money.toFixed(2)} $
                        </MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Shipping
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select
                          className="select p-2 rounded bg-grey"
                          style={{ width: "100%" }}
                        >
                          <option value="1">Standard-Delivery- 0.00$</option>
                          <option value="2">Shopee Express- 0.00$</option>
                          <option value="3">J&T Express- 0.00$</option>
                          <option value="4">Kerry 0.00$</option>
                        </select>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Give code
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          {money.toFixed(2)} $
                        </MDBTypography>
                      </div>
                      <div style={{ float: "right", marginBottom: "30px" }}>
                        <button
                          id="ConfirmCart"
                          className="submit_product"
                          onClick={handleSubmit}
                        >
                          Confirm
                        </button>
                      </div>
                      {/* <MDBBtn color="dark" block size="lg" >
                        Confirms
                      </MDBBtn> */}
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Cart;
