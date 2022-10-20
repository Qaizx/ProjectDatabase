import "./Product.css"
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React from "react"

const Product = () => {
    return (
        <div>
            <div>
                <h1> This is product page</h1>
            </div>
            <div>
                <div class="container py-5">
                    <div class="row d-flex justify-content-center my-4">
                        <div class="col-md-10">
                            <div class="card " >
                                <div class="card-header py-3">
                                    <h3 class="mb-0">My Heart</h3>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/285106686_554608796243278_4789117999661605040_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Nhj1ZDwm9E8AX9_KnF0&_nc_ht=scontent.fcnx3-1.fna&oh=03_AdR-3ljZx_yBBDzWJyoH0TnKRQu-yHgJcpUr1V1CW4B-Vw&oe=637887B6"
                                                class="w-100" alt="Product" />
                                        </div>
                                        <div class="col mt-2">
                                            <h2 class="mb-3">Price : $69.69</h2>
                                            <h2 class="mb-3">Stock : 999</h2>
                                            <h2>Description: BOBOO</h2>
                                            <button>
                                                Add to cart
                                            </button>
                                        </div>
                                        
                                    </div>



                                </div>
                            </div>
                        </div>
                        {/* <div class="col-md-4">
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
                                        <hr class="" />
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
                        </div> */}

                    </div>
                </div>

            </div>
        </div>
    )
}


export default Product;