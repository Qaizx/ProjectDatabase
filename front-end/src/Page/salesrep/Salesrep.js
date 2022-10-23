import "./Salesrep.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Salesrep = () => {
  const [profile, setProfile] = useState();
  const [picture, setPicture] = useState();
  const [check, setChecked] = useState(true);
  const [checkPic, setCheckPic] = useState(true);
  const CryptoJS = require("crypto-js");
  const [office, setOffice] = useState();
  const [checkOffice, setCheckOffice] = useState(true)

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    const username = CryptoJS.enc.Base64.parse(token).toString(
      CryptoJS.enc.Utf8
    );

    // console.log(username);

    var myHeaders = new Headers();
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

    await fetch("http://127.0.0.1:8000/api/getEmployee", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setChecked(false);
        setProfile(result);
      })
      .catch((error) => console.log("error", error));
  };

  const getPicture = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.unsplash.com/photos/random/?client_id=jQ6hAqjRKnrpBau5FEmUfJwYTRnc6RxZSab-P7PdTwA",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setPicture(result.urls.raw);
        setCheckPic(false);
      })
      .catch((error) => console.log("error", error));
  };

  const getOffice = async () => {
    const IDSaleRep = localStorage.getItem("IDSaleRep");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      employeeNumber: IDSaleRep,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch("http://127.0.0.1:8000/api/getOffice", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOffice(result);
        setCheckOffice(false)
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProfile();
    getOffice();
    getPicture();
  }, []);

  const render = () => {
    if (check || checkOffice) {
      return (
        <div style={{ textAlign: "center", margin: "100px 0px" }}>
          <h1>Loading . . .</h1>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <h1> This is salesrep page</h1>
          </div>
          <div>
            <div class="container py-5">
              <div class="row d-flex justify-content-center my-4">
                <div class="col-md-10">
                  <div class="card ">
                    <div class="card-header py-3 d-flex ">
                      <div class="">
                        <h3 class="mb-0">
                          {profile.firstName} {profile.lastName}
                        </h3>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-5">
                          <img src={picture} class="w-100" alt="Profile Pic" />
                        </div>
                        <div class="col mt-2">
                          <p class="mb-3">
                            <b>JobTitle :</b> {profile.jobTitle}
                          </p>
                          <p class="mb-3">
                            <b>email :</b> {profile.email}
                          </p>
                          <p class="mb-3">
                            <b>Phone :</b>
                            {profile.phone}
                          </p>
                          <p class="mb-3">-----------Office----------</p>
                          {/* <p class="mb-3"><b>Phone :</b> {office.phone}</p> */}
                          <p class="mb-3">
                            <b>addressLine1 :</b> {office.addressLine1}
                          </p>
                          <p class="mb-3">
                            <b>addressLine2 :</b> {office.addressLine2}
                          </p>
                          <p class="mb-3">
                            <b>City :</b>
                            {office.city}
                          </p>
                          <p class="mb-3">
                            <b>State :</b> {office.state}
                          </p>

                          <p class="mb-3">
                            <b>Country :</b> {office.country}
                          </p>
                          <p class="mb-3">
                            <b>Postal Code :</b> {office.postalCode}
                          </p>
                        </div>
                      </div>

                      <Link to="/profile">
                          <div class="mx-2" style={{textAlign:"right"}}>
                            <button type="button">Back</button>
                          </div>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{render()}</div>;
};
export default Salesrep;
