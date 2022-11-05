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
        <div class="d-flex flex-column">
          <div>
            <div class="container">
              <div class="row d-flex justify-content-center my-4">
                <div class="col-md-10">
                  <div class="card ">
                    <div class="card-header py-3 d-flex ">
                      <div class="">
                        <h3 class="mb-0">
                          SalesRep Information
                        </h3>
                      </div>
                    </div>
                    <div class="card-body my-2">
                      <div class="row d-flex justify-content-center">
                        <div class="col-md-5">
                        {/* <img src={picture} alt="Profile Pic" style = {{height:"672px"}} class = "rounded-3"/>  */}
                          <img src="https://i.redd.it/jeuusd992wd41.jpg" alt="Profile Pic" style = {{height:"656px"}} class = "rounded-3 shadow-lg"/>
                        </div>

                        <div class="col-md-5 border-right" style={{ marginLeft: "60px" }}>
                          <div class="">
                            <div class="row">
                              <div>
                                <h3>Info</h3>
                                <div class = "col-md-12 d-flex">
                                  <div class = "me-5">
                                    <label class="labels">First Name</label>
                                    <h5>{profile.firstName ? profile.firstName : '-'}</h5>
                                  </div>
                                  <div>
                                    <label class="labels">Last Name</label>
                                    <h5>{profile.lastName ? profile.lastName : '-'}</h5>
                                  </div>
                                </div>

                                <div class="col-md-12">
                                  <label class="labels">JobTitle</label>
                                  <h5>{profile.jobTitle ? profile.jobTitle : '-'}</h5>
                                </div>
                                <div class="col-md-12">
                                  <label class="labels">Email</label>
                                  <h5>{profile.email ? profile.email : '-'}</h5>
                                </div>
                                <div class="col-md-12">
                                  <label class="labels">Phone</label>
                                  <h5>{profile.phone ? profile.phone : '-'}</h5>
                                </div>
                              </div>

                              <div class="mt-4">
                                <h3>Office</h3>
                                <div class="col-md-12">
                                  <label class="labels">Address Line 1</label>
                                  <h5>{office.addressLine1 ? office.addressLine1 : '-'}</h5>
                                </div>
                                <div class="col-md-12">
                                  <label class="labels">Address Line 2</label>
                                  <h5>{office.addressLine2 ? office.addressLine2 : '-'}</h5>
                                </div>
                                <div class="col-md-12">
                                  <label class="labels">City</label>
                                  <h5>{office.city ? office.city : '-'}</h5>
                                </div>
                                <div class="col-md-12">
                                  <label class="labels">State</label>
                                  <h5>{office.state ? office.state : '-'}</h5>
                                </div>
                                <div class="col-md-12">
                                  <label class="labels">Country</label>
                                  <h5>{office.country ? office.country : '-'}</h5>
                                </div>
                                <div class="col-md-12">
                                  <label class="labels">Postal Code</label>
                                  <h5>{office.postalCode ? office.postalCode : '-'}</h5>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                      <Link to="/profile">
                        <div class="mx-2" style={{ textAlign: "right" }}>
                          <button type="button" className="add-experience">Back</button>
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

  return <div style={{ fontFamily: "JetBrains Mono" }}>{render()}</div>;
};
export default Salesrep;
