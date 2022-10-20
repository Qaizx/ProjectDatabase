import "./Cart.css"
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React from "react"

const Cart = () => {
    return (
        <div>
            <div>
                <h1 class="ms-5 mt-5"> This is Cart page</h1>
            </div>
            <div class="container py-5">
                <div class="row d-flex justify-content-center my-4">
                    <div class="col-md-8">
                        <div class="card " >
                            <div class="card-header py-3">
                                <h5 class="mb-0">Your Cart</h5>
                            </div>
                            <div class="card-body">
                                <div class="row my-2">
                                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 divwhite">
                                        <div class="" >
                                            <img src="https://swis.montfort.ac.th/lib/show_img.php?id=MTZ4NGo0OTRpNDc0ODRyNXE1bjVuNHA0djM5NG41cDVkNGY0OTR0Mjg0MDN6MjI0aTNyM3M0djNsNWg0cjVkNGw0MjR0NWU0MzM5NDg0YjQ5NDQzcDJpMzE1YjM."
                                                class="w-100" alt="Blue Jeans Jacket" />
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        <p><strong>My heart</strong></p>
                                        <p>Stock : 69</p>
                                        <button type="button" class="btn btn-primary btn-sm me-1 mb-2"
                                            title="Remove item">
                                            Remove item
                                        </button>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        <div class="d-flex mb-4">
                                            <button class="btn btn-primary px-3 me-2">-</button>

                                            <div class="form-outline mt-1">69</div>

                                            <button class="btn btn-primary px-3 ms-2">+</button>
                                        </div>

                                        <p class="text-start text-md-center">
                                            <strong>$69.69</strong>
                                        </p>
                                    </div>
                                </div>
                                <hr class="my-1" />
                                <div class="row my-2">
                                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                        <div class="" >
                                            <img src="https://swis.montfort.ac.th/lib/show_img.php?id=MTZ4NGo0OTRpNDc0ODRyNXE1bjVuNHA0djM5NG41cDVkNGY0OTR0Mjg0MDN6MjI0aTNyM3M0djNsNWg0cjVkNGw0MjR0NWU0MzM5NDg0YjQ5NDQzcDJpMzE1YjM."
                                                class="w-100" alt="Blue Jeans Jacket" />
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        <p><strong>My heart</strong></p>
                                        <p>Stock : 69</p>
                                        <button type="button" class="btn btn-primary btn-sm me-1 mb-2"
                                            title="Remove item">
                                            Remove item
                                        </button>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        <div class="d-flex mb-4">
                                            <button class="btn btn-primary px-3 me-2">-</button>

                                            <div class="form-outline mt-1">69</div>

                                            <button class="btn btn-primary px-3 ms-2">+</button>
                                        </div>

                                        <p class="text-start text-md-center">
                                            <strong>$69.69</strong>
                                        </p>
                                    </div>
                                </div>
                                <hr class="my-1" />
                                <div class="row my-2">
                                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                        <div class="" >
                                            <img src="https://swis.montfort.ac.th/lib/show_img.php?id=MTZ4NGo0OTRpNDc0ODRyNXE1bjVuNHA0djM5NG41cDVkNGY0OTR0Mjg0MDN6MjI0aTNyM3M0djNsNWg0cjVkNGw0MjR0NWU0MzM5NDg0YjQ5NDQzcDJpMzE1YjM."
                                                class="w-100" alt="Blue Jeans Jacket" />
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        <p><strong>My heart</strong></p>
                                        <p>Stock : 69</p>
                                        <button type="button" class="btn btn-primary btn-sm me-1 mb-2"
                                            title="Remove item">
                                            Remove item
                                        </button>
                                    </div>
                                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        <div class="d-flex mb-4">
                                            <button class="btn btn-primary px-3 me-2">-</button>

                                            <div class="form-outline mt-1">69</div>

                                            <button class="btn btn-primary px-3 ms-2">+</button>
                                        </div>

                                        <p class="text-start text-md-center">
                                            <strong>$69.69</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-header py-3">
                                <h5 class="mb-0">Summary</h5>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>$69.69</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>$69.69</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>$69.69</span>
                                    </li>
                                    <hr class=""/>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                        </div>
                                        <span><strong>$209.07</strong></span>
                                    </li>
                                </ul>

                                <button type="button" class="btn btn-primary btn-lg btn-block">
                                    Go to checkout
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}


export default Cart;