import "./Profile.css"
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React from "react"
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();


    const handleSubmit = () =>{
        console.log("1");
    }
    return (
        <div>
            <div>
                <h1> This is product page</h1>
            </div>
            <div onSubmit={handleSubmit}>
                <div class="container py-5">
                    <div class="row d-flex justify-content-center my-4">
                        <div class="col-md-10">
                            <div class="card " >
                                <div class="card-header py-3 d-flex ">
                                    <div class="">
                                        <h3 class="mb-0">GIGACHADRCN</h3>
                                    </div>
                                    <div class="eiei d-flex">
                                        <div class="mx-2">
                                            <button class="">SalesRep</button>
                                        </div>
                                        <div class="mx-2    ">
                                            <button class="">History</button>
                                        </div>
                                        <Link to="/info">
                                        <div class="mx-2">
                                            <button type="button">Edit Profile</button>
                                        </div>  
                                        </Link>
                                        
                                    </div>

                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/285106686_554608796243278_4789117999661605040_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Nhj1ZDwm9E8AX9_KnF0&_nc_ht=scontent.fcnx3-1.fna&oh=03_AdR-3ljZx_yBBDzWJyoH0TnKRQu-yHgJcpUr1V1CW4B-Vw&oe=637887B6"
                                                class="w-100" alt="Profile Pic" />
                                        </div>
                                        <div class="col mt-2">
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                            <h2 class="mb-3">CustomerDetail : NAN</h2>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}


export default Profile;