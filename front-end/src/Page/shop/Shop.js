import "./Shop.css";
import { Button, Row, Form, Col, Container, Card } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

const Shop = () => {
  const MySwal = withReactContent(Swal);
  const [products, setProducts] = useState([]);
  const [check, setChecked] = useState(true);
  const typeProduct = localStorage.getItem("type");
  const [typeItem, setTypeItem] = useState([
    "Show all",
    "Classic Cars",
    "Motorcycles",
    "Planes",
    "Ships",
    "Trains",
    "Trucks and Buses",
    "Vintage Cars",
  ]);
  const [inputs, setInputs] = useState({});
  var nameProduct = localStorage.getItem("nameOfProduct");
  const CryptoJS = require("crypto-js");
  const token = localStorage.getItem("token");
  var username = "";
  const [disabled, setDisabled] = useState(true);
  const [typeP, setTypeP] = useState("")

  const checkToken = () => {
    if (token == null) {
      setDisabled(true);
    } else {
      username = CryptoJS.enc.Base64.parse(token).toString(CryptoJS.enc.Utf8);
      setDisabled(false);
    }
  };

  const checkNameProduct = () => {
    if (nameProduct == null) {
      return "Search . . .";
    } else {
      return nameProduct;
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    // console.log(inputs.name);
  };

  const handleSubmit = async () => {
    // console.log(inputs);
    await localStorage.setItem("nameOfProduct", inputs.name);
    window.location.href = "/shop";

  };
  const handleClear = () => {
    setTypeP("type")
    localStorage.removeItem("nameOfProduct");
    // window.location.href = "/shop";
  };

  const initProducts = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IldZOE12U1d5WVpqVkg4WUdoVDdZUlE9PSIsInZhbHVlIjoiQUIxNndzdzh5UkwwYVB5RFNZVWkvR1Axa1BkYW5zRXM1bE1hVjNUZHRjNlFNU2xRd3pNSWZOS25JZEwwWW4zZHU2bDlybGdmSFMwUnFtalNhNmxnUXlTNEdqbkNmdzJ4L2FKNFBvb1dSdlMyTEF5c0VUVVVmWkE2MmpuNVNwdEEiLCJtYWMiOiI0MzVlOTRiZmYwYWE4MGRlMTMxOWExZDU0NGEzNDAyZWM5NGQ1MmQ3Y2ZkZTU5MzljMzg3M2ZkYjVkNzYwZGIyIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6ImZYZjRYM1phdFdiazdpUnR5eFEvdUE9PSIsInZhbHVlIjoiWWorNnZlamRqNW4yNVJ3akdJZFF1dzRoVjBKbnJ5REYwRlFScGx2bFB1V3Z2aG5GMk9QelVQbkcxcVV3amYrTjNtdVJtNDJ5M1FYUXYzS21ZbEZPUnJLTER2L2J5T0NGeHV0RlJOU09pWUZmQVNlenZKcVRSKzJ2cWNueGR5cXQiLCJtYWMiOiJiOWQ3NmE2ZmM3ZTcwNGIzZjNkYTE1Y2EwYTliYWNlMWQ5Nzg0NjcxZTFlZDMwOTFlMmQ3NjI2YjY2ODhjYjlkIiwidGFnIjoiIn0%3D"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setChecked(false);
        // console.log(result);
        setProducts(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    initProducts();
  }, []);

  useEffect(() => {
    render();
  }, [typeP]);

  // useEffect(() => {
  //   // typeFilter()
  //   barType()
  //   render()
  // });

  const barType = () => {
    const Item = typeItem.map(function (tasks) {
      if (typeProduct === tasks) {
        return (
          <button style={{ fontSize: "14px" }} class="select active" onClick={() => typeFilter(tasks)}>
            {" "}
            {tasks}
          </button>
        );
      } else {
        return (
          <button style={{ fontSize: "14px" }} class="select" onClick={() => typeFilter(tasks)}>
            {" "}
            {tasks}
          </button>
        );
      }
    });
    return Item;
  };

  const handleMouseMove = (IDProduct) => {
    // console.log(IDProduct);
    localStorage.setItem("IDProduct", IDProduct);
    // window.location.href = "/product";
  };

  const typeFilter = (type) => {
    console.log(type);
    setTypeP(type)
    localStorage.setItem("type", type);
    // window.location.href = "/shop";
  };

  const handleClick = (task) => {
    if (task <= 0) {
      MySwal.fire({
        title: <strong>Out of stock</strong>,
        icon: "error",
      });
    } else {
      MySwal.fire({
        title: <strong>Add Success</strong>,
        icon: "success",
      });

      const IDProduct = localStorage.getItem("IDProduct");
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
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

      fetch("http://127.0.0.1:8000/api/addToCart", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }

  };

  const render = () => {
    if (check)
      return (
        <div style={{ textAlign: "center", margin: "100px 0px" }}>
          <h1>Loading . . .</h1>
        </div>
      );
    else {

      const listItems = products.map(function (tasks) {
        const CardItem = () => {
          return (
            <Card
              style={{
                width: "25rem",
                margin: "10px 10px"
                // height:"35rem"
              }}
              className="cardShop d-flex flex-column justify-content-between"
              onMouseMove={() => handleMouseMove(tasks.productCode)}
            >
              <Link to="/product">
                <Card.Img
                  variant="top"
                  src={tasks.url}
                  // onClick={() => handleClick(tasks.productCode)}
                  // type="submit"
                  style={{ maxHeight: "250px", minHeight: "250px", padding: "8px", borderRadius: "15px 15px 0px 0px" }}

                />
              </Link>

              <div>
                <Card.Body>
                  <div
                  // onClick={() => handleClick(tasks.productCode)}
                  // type="submit"
                  >
                    <Card.Title>{tasks.productName}</Card.Title>

                    <Card.Text>
                      <b>Type :</b> {tasks.productLine}
                    </Card.Text>
                    <Card.Text>
                      <b>Scale :</b> {tasks.productScale}
                    </Card.Text>

                    <Card.Text>
                      <b>Stock :</b> {tasks.quantityInStock}
                    </Card.Text>
                    <Card.Text>
                      <b>Price :</b> {tasks.buyPrice}
                    </Card.Text>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/product">
                      <Button className="btn d-flex align-items-center"
                        variant="warning"
                        style={{ marginTop: "10px" }}
                      >
                        More info
                        <img
                          src="   https://cdn-icons-png.flaticon.com/512/471/471662.png "
                          width="20"
                          height="20"
                          alt=""
                          title=""
                          class="img-small"
                          style={{ marginLeft: "9px" }}
                        ></img>
                      </Button>
                    </Link>

                    <Button
                      className="btn"
                      disabled={disabled}
<<<<<<< HEAD
                      onClick={() => {handleClick(tasks.quantityInStock)}}
=======
                      onClick={() => { handleClick(tasks.quantityInStock) }}
>>>>>>> 5b7991e637e3828bb6ef2f9f1d42cf8536e1a44f
                      style={{ color: "black" }}
                    >
                      Order
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                        width="20"
                        height="20"
                        alt=""
                        title=""
                        class="img-small"
                        style={{ marginLeft: "9px" }}
                      ></img>
                    </Button>
                  </div>
                </Card.Body>
              </div>
            </Card>
          );
        };

        if (nameProduct === null) {
          if (tasks.productLine === typeProduct) {
            return <>{CardItem()}</>;
          } else if (typeProduct === "Show all") {
            return <>{CardItem()}</>;
          }
        } else {
          if (tasks.productName.toLowerCase().includes(nameProduct.toLowerCase())) {
            if (tasks.productLine === typeProduct) {
              return <>{CardItem()}</>;
            } else if (typeProduct === "Show all") {
              return <>{CardItem()}</>;
            }
          } else {
            return null;
          }
        }
      });
      // localStorage.removeItem("nameOfProduct");

      var listItemsFilter = listItems.filter(Boolean)
      const chunks = [];

      while (listItemsFilter.length) {
        chunks.push(listItemsFilter.splice(0, 3));
      }

      // // console.log(chunks)

      return chunks.map(chunk => (
        <div class="row d-flex">{chunk.map(item => <div class="col-4 d-flex justify-content-center" >{item}</div>)}</div>
      ));

      // return <div class="row justify-content-start">{listItems}</div>;
    }
  };

  return (
    <div style={{ fontFamily: "JetBrains Mono" }} class="" onMouseMove={checkToken}>
      <h1 className="product">
        Shop
      </h1>
      <div class="container">
        <div style={{ padding: "20px 0px" }}>
          <div id="myBtnContainer" class="d-flex justify-content-between align-items-center">
            <div>
              {barType()}
            </div>

            <div class="search-container d-flex align-items-center">

              <input
                type="text"
                placeholder={checkNameProduct()}
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
              />

              <button type="submit" onClick={handleSubmit}>
                <img
                  src=" https://cdn-icons-png.flaticon.com/512/54/54481.png"
                  width="25"
                  height="25"
                  alt=""
                  title=""
                  class="img-small"
                  type="submit"
                />
              </button>

              <button type="submit" onClick={handleClear}>
                clear
              </button>

            </div>

          </div>

        </div>
        <div className="container">
          {render()}

        </div>

      </div>
    </div>
  );
};

export default Shop;
