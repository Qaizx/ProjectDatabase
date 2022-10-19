import "./Shop.css"
import joji from "./images/joji.jfif"
import { Button, Row, Form, Col, Container, Card } from "react-bootstrap";
import React from "react"

const Shop = () => {
    return (
        <div clas="flex-column">
            <div class="content">
                <h1>This is Shop page</h1>
            </div>
            <div class="container margin-top:5000px">
                <div class="row align-items-start">
                    <div class="col">
                        <div class="card" className="cardcss">
                            <img class="card-img-top" src="https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2" alt="Card img" />
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text.</p>
                                <a href="" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" className="cardcss">
                            <img class="card-img-top" src="https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2" alt="Card img" />
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text.</p>
                                <a href="" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" className="cardcss">
                            <img class="card-img-top" src="https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2" alt="Card img" />
                            <div class="card-body">
                                <h4 class="card-title">John Doe</h4>
                                <p class="card-text">Some example text.</p>
                                <a href="" class="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                </div>
                <div class="row align-items-end">
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Shop;