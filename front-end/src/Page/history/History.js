import "./History.css"
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const History = () => {
    const [order, setOrder] = useState();
    const CryptoJS = require("crypto-js");
    const getHistory = async () => {
        const token = localStorage.getItem("token");
        const username = CryptoJS.enc.Base64.parse(token).toString(
            CryptoJS.enc.Utf8
        );

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            // body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/getOrders", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getHistory()
    } , [])


    return (
        <div>
            <div>
                <div class="head">Order History</div>
            </div>
            <div>
                <div class="row px-5">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-1">
                                    <img src="https://www.adameve.com/cms/image/623024-695870-350x350.jpg"
                                        class="mr-2" width="150" height="150" alt="Product" />
                                </div>
                                <div class="col">
                                    <h2 class="d-flex justify-content-center mt-5 mx-5">Product Name</h2>
                                </div>
                                <div class="col">
                                    <h2 class="d-flex justify-content-center mt-5 mx-5">Quantity : 69</h2>
                                </div>
                                <div class="col">
                                    <h2 class="d-flex justify-content-center mt-5 mx-5">Total : $5000</h2>
                                </div>
                            </div>
                            <hr class="my-2" />
                            <div class="row">
                                <div class="col-md-1">
                                    <img src="https://www.adameve.com/cms/image/623024-695870-350x350.jpg"
                                        class="mr-2" width="150" height="150" alt="Product" />
                                </div>
                                <div class="col">
                                    <h2 class="d-flex justify-content-center mt-5 mx-5">Product Name</h2>
                                </div>
                                <div class="col">
                                    <h2 class="d-flex justify-content-center mt-5 mx-5">Quantity : 69</h2>
                                </div>
                                <div class="col">
                                    <h2 class="d-flex justify-content-center mt-5 mx-5">Total : $5000</h2>
                                </div>
                            </div>
                            <hr class="my-2" />
                            <div class="row">
                                <div class="col-md-1">
                                    <img src="https://www.adameve.com/cms/image/623024-695870-350x350.jpg"
                                        class="mr-2" width="150" height="150" alt="Product" />
                                </div>
                                <div class="col">
                                    <h2 class="d-flex justify-content-center mt-5 mx-5">Product Name</h2>
                                </div>
                                <div class="col">
                                    <h2 class="d-flex justify-content-center mt-5 mx-5">Quantity : 69</h2>
                                </div>
                                <div class="col">
                                    <h2 class="d-flex justify-content-center mt-5 mx-5">Total : $5000</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default History;