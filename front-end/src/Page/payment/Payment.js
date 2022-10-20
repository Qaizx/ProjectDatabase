import "./Payment.css"
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React from "react"

const Payment = () => {
    return (
        <div>
            <div>
                <h1> This is Payment page</h1>
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


export default Payment;