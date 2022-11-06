// import "./History.css";
import { Button, rowOrderHistory, Form, Col, Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PaymentHistory = () => {
    const [pH, setPH] = useState([]);
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

        fetch("http://127.0.0.1:8000/api/getPayments", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setPH(result);
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
            const listpH = pH.map((count) => {
                return (
                    <div class="rowOrderHistory hoverRow d-flex align-items-center">
                        <div class="col-sm-1 ms-5  d-flex justify-content-center">
                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBkFJdIANWwFk6E9ggqNLfQTe-IDgfDnsUC3zmtDd&s"
                                /> */}
                        </div>
                        <div class="col d-flex justify-content-center">
                            {count.paymentDate}
                        </div>
                        <div class="col-sm-1 d-flex justify-content-center me-3">
                            {count.amount}
                        </div>
                    </div>
                )
            });
            return <div>{listpH}</div>
        }
    };
    return (
        <div style={{ fontFamily: "JetBrains Mono" }} className="mb-5">
            <div className="title">
                Payment History
            </div>
            <div className="container d-flex flex-column">
                <div class="rowOrderHistory headerRow1 d-flex align-items-center" style={{ borderRadius: "5px"}}>
                    <div class="col-sm-1 d-flex justify-content-center">
                        <Link to="/profile">
                            <button
                                class="buttonn button4"
                                type="button"
                            >
                                Back
                            </button>
                        </Link>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <div style={{ fontSize: '25px' }}>
                            Payment Date
                        </div>
                    </div>
                    <div class="col-sm-1 d-flex justify-content-center">
                        <div style={{ fontSize: '25px' }} class="me-5">
                            Amount
                        </div>
                    </div>
                </div>
                {render()}
            </div>
        </div>
    )

}

export default PaymentHistory
