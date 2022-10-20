import "./Shop.css"
import { Button, Row, Form, Col, Container, Card } from "react-bootstrap";
import React from "react"

const Shop = () => {
    return (
        <div clas="flex-column">
            <div class="">
                <h1 class="ms-5 mt-5">This is Shop page</h1>
            </div>
            <div class="mt-5">
                <div class="container ">
                    <div class="row align-items-start mb-5">
                        <div class="col">
                            <div class="card" className="cardcss">
                                <img class="card-img-top" src="https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2" alt="Card img" />
                                <div class="card-body">
                                    <h4 class="card-title">Product Name</h4>
                                    <p class="card-text">Description</p>
                                    <a href="" class="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" className="cardcss">
                                <img class="card-img-top" src="https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2" alt="Card img" />
                                <div class="card-body">
                                    <h4 class="card-title">Product Name</h4>
                                    <p class="card-text">Description</p>
                                    <a href="" class="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" className="cardcss">
                                <img class="card-img-top" src="https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2" alt="Card img" />
                                <div class="card-body">
                                    <h4 class="card-title">Product Name</h4>
                                    <p class="card-text">Description</p>
                                    <a href="" class="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-start mb-5">
                        <div class="col">
                            <div class="card" className="cardcss">
                                <img class="card-img-top" src="https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2" alt="Card img" />
                                <div class="card-body">
                                    <h4 class="card-title">Product Name</h4>
                                    <p class="card-text">Description</p>
                                    <a href="" class="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" className="cardcss">
                                <img class="card-img-top" src="https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2" alt="Card img" />
                                <div class="card-body">
                                    <h4 class="card-title">Product Name</h4>
                                    <p class="card-text">Description</p>
                                    <a href="" class="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card" className="cardcss">
                                <img class="card-img-top" src="https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2" alt="Card img" />
                                <div class="card-body">
                                    <h4 class="card-title">Product Name</h4>
                                    <p class="card-text">Description</p>
                                    <a href="" class="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Shop;