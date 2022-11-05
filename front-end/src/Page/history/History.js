import "./History.css";
import { Button, rowOrderHistory, Form, Col, Container } from "react-bootstrap";
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
                    <div class="rowOrderHistory hoverRow d-flex align-items-center">
                        <div class="col-sm-1 ms-5  d-flex justify-content-center">
                            <img src={count.url}
                                class="shadow-lg" alt="Product" style={{ borderRadius: "5px", maxHeight: "100px" }} />
                        </div>
                        <div class="col d-flex justify-content-center">
                            {count.productName}
                        </div>
                        <div class="col-sm-1 d-flex justify-content-center">
                            {count.quantityOrdered}
                        </div>
                        <div class="col-sm-1 d-flex justify-content-center">
                            {count.priceEach}
                        </div>
                    </div>
                )
            });
            return <div>{listOrders}</div>



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
        //                 <div class="rowOrderHistory">
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
    };
    return (
        <div style={{ fontFamily: "JetBrains Mono" }} className="mb-5">
            <div className="title">
                Order History
            </div>
            <div className="container d-flex flex-column">
                <div class="rowOrderHistory headerRow1 d-flex align-items-center" style={{ borderRadius: "5px"}}>
                    <div class="col-sm-1 d-flex justify-content-center">
                        <Link to="/profile">
                            <button
                                class="add-experience"
                                type="button"
                            >
                                Back
                            </button>
                        </Link>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <div style={{ fontSize: '25px' }}>
                            Product Name
                        </div>
                    </div>
                    <div class="col-sm-1 d-flex justify-content-center">
                        <div>
                            Quantity
                        </div>
                    </div>
                    <div class="col-sm-1 d-flex justify-content-center">
                        <div>
                            PriceEach
                        </div>
                    </div>
                </div>
                {render()}
            </div>
        </div>
    )
    return (
        <div>
            <div>
                <div class="head">Order History</div>
            </div>
            <div>
                <div class="rowOrderHistory px-5">
                    <div class="card px-0">
                        <div class="card-header">
                            <div class="rowOrderHistory">
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

}

export default History
