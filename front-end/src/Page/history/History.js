import "./History.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const History = () => {
  const [orderDetail, setOrderDetail] = useState([]);
  const [check, setChecked] = useState(true);
  const CryptoJS = require("crypto-js");
  var username = "";
  const token = localStorage.getItem("token");
  const [disabled, setDisabled] = useState(true);

  const checkToken = () => {
    if (token == null) {
      setDisabled(true);
    } else {
      username = CryptoJS.enc.Base64.parse(token).toString(CryptoJS.enc.Utf8);
      setDisabled(false);
    }
  };

  const getHistory = async () => {
    const token = localStorage.getItem("token");
    const username = CryptoJS.enc.Base64.parse(token).toString(
      CryptoJS.enc.Utf8
    );

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

    fetch("http://127.0.0.1:8000/api/getOrders", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOrderDetail(result);
        setChecked(false);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getHistory();
  }, []);

<<<<<<< HEAD
  const render = () => {
    if (check) {
      return (
        <div style={{ textAlign: "center", margin: "100px 0px" }}>
          <h1>Loading . . .</h1>
        </div>
      );
    } else {
      const listOrders = orderDetail.map((count) => {
        return (
          <div class="row">
            <div class="col-md-1">
              <img
                src={count.url}
                class="mr-2"
                width="150"
                height="150"
                alt="Product"
              />
            </div>
            <div class="col">
              <h2 class="d-flex justify-content-center mt-5 mx-5 text-center">
                {count.productName}
              </h2>
            </div>
            <div class="col">
              <h2 class="d-flex justify-content-center mt-5 mx-5">
                {count.quantityOrdered}
              </h2>
            </div>
            <div class="col">
              <h2 class="d-flex justify-content-center mt-5 mx-5">
                {count.priceEach}
              </h2>
            </div>
            <hr class="my-2" />
          </div>
        );
      });
=======
        var raw = JSON.stringify({
            "username": username
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch("http://127.0.0.1:8000/api/getOrders", requestOptions)
            .then(response => response.json())
            .then((result) => {
                setOrderDetail(result);
                setChecked(false)
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getHistory()
    }, [])

    const render = () => {
        if (check) {
            return (
                <div style={{ textAlign: "center", margin: "100px 0px" }}>
                    <h1>Loading . . .</h1>
                </div>
            );
        } else {
            const listOrders = orderDetail.map((count) => {
                return (
                    <div class="row">
                        <div class="col-sm-1 ms-3 d-flex justify-content-center">
                            <img src={count.url}
                                alt="Product" style={{ maxHeight: "100px" }} />
                        </div>
                        <div class="col d-flex justify-content-center ">
                            <p class="align-self-center">{count.productName}</p>
                        </div>
                        <div class="col-sm-1 d-flex justify-content-center">
                            <p class="align-self-center">{count.quantityOrdered}</p>
                        </div>
                        <div class="col-sm-1 d-flex justify-content-center">
                            <p class="align-self-center">{count.priceEach}</p>
                        </div>
                        <hr class="my-2" />
                    </div>
                )
            })

            return <div>{listOrders}</div>
        }
    }

    // const render2 = () => {
    //     if (check) {
    //         return (
    //             <div style={{ textAlign: "center", margin: "100px 0px" }}>
    //                 <h1>Loading . . .</h1>
    //             </div>
    //         );
    //     } else {
    //         const listOrders = orderDetail.map((count) => {
    //             return (
    //                 <div class="row">
    //                     <div class="col-md-1">
    //                         <img src={count.url}
    //                             class="mr-2" width="150" height="150" alt="Product" />
    //                     </div>
    //                     <div class="col">
    //                         <h2 class="d-flex justify-content-center mt-5 mx-5 text-center">{count.productName}</h2>
    //                     </div>
    //                     <div class="col">
    //                         <h2 class="d-flex justify-content-center mt-5 mx-5">{count.quantityOrdered}</h2>
    //                     </div>
    //                     <div class="col">
    //                         <h2 class="d-flex justify-content-center mt-5 mx-5">{count.priceEach}</h2>
    //                     </div>
    //                     <hr class="my-2" />
    //                 </div>
    //             )
    //         })

    //         return <div>{listOrders}</div>
    //     }
    // }


    return (
        <div style={{ fontFamily: "JetBrains Mono" }} className="d-flex flex-column align-items-center">
            <div className="title align-self-start">
                Order History
            </div>
            <div className="w-75">
                <div class="row">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-sm-1 d-flex justify-content-center">
                                </div>
                                <div class="col d-flex justify-content-center">
                                    <p class="align-self-center ">Product Name</p>
                                </div>
                                <div class="col-sm-1 col d-flex justify-content-cente">
                                    <p class="align-self-center ">Quantity</p>
                                </div>
                                <div class="col-sm-1 col d-flex justify-content-cente">
                                    <p class="align-self-center ">PriceEach</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            {render()}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
>>>>>>> 09f9dacd147606867982887a359fcf54f5714c6a

      return <div>{listOrders}</div>;
    }
  };

  // const render2 = () => {
  //     if (check) {
  //         return (
  //             <div style={{ textAlign: "center", margin: "100px 0px" }}>
  //                 <h1>Loading . . .</h1>
  //             </div>
  //         );
  //     } else {
  //         const listOrders = orderDetail.map((count) => {
  //             return (
  //                 <div class="row">
  //                     <div class="col-md-1">
  //                         <img src={count.url}
  //                             class="mr-2" width="150" height="150" alt="Product" />
  //                     </div>
  //                     <div class="col">
  //                         <h2 class="d-flex justify-content-center mt-5 mx-5 text-center">{count.productName}</h2>
  //                     </div>
  //                     <div class="col">
  //                         <h2 class="d-flex justify-content-center mt-5 mx-5">{count.quantityOrdered}</h2>
  //                     </div>
  //                     <div class="col">
  //                         <h2 class="d-flex justify-content-center mt-5 mx-5">{count.priceEach}</h2>
  //                     </div>
  //                     <hr class="my-2" />
  //                 </div>
  //             )
  //         })

  //         return <div>{listOrders}</div>
  //     }
  // }

  return (
    <div>
      <div>
        <div class="head">Order History</div>
      </div>
      <div>
        <div class="row px-5">
          <div class="card px-0">
            <div class="card-header">
              <div class="row">
                <div class="col-md-1"></div>

                <div class="col">
                  <div style={{ marginLeft: "-120px" }}>
                    <Link to="/profile">
                      <button
                        class="btn btn-primary button3"
                        type="button"
                        style={{ marginRight: "20px" }}
                      >
                        Back
                      </button>
                    </Link>
                  </div>
                </div>

                <div class="col">
                  <h2 style={{ marginLeft: "-240px", marginTop: "10px" }}>
                    Product Name
                  </h2>
                </div>
                <div class="col">
                  <h2 style={{ marginLeft: "-75px", marginTop: "10px" }}>
                    Quantity
                  </h2>
                </div>
                <div class="col">
                  <h2 style={{ marginLeft: "50px", marginTop: "10px" }}>
                    Price Each
                  </h2>
                </div>
              </div>
            </div>
            <div class="card-body">{render()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
