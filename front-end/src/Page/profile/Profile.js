import "./Profile.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState();
  const [picture, setPicture] = useState();
  const [check, setChecked] = useState(true);
  const [checkPic, setCheckPic] = useState(true);
  const CryptoJS = require("crypto-js");

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    const username = CryptoJS.enc.Base64.parse(token).toString(
      CryptoJS.enc.Utf8
    );

    // console.log(username);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IkpBMmNPeFhCUi9XQnpsVnRUaERSU1E9PSIsInZhbHVlIjoidGdPK1c4QTZLbFBhZ1VkdXdSemVRRzFzZmdGeThTbzljajQ2RWRHSTNSU3cvazN6eDNOaStXWHZLVEN0aE03VklMdno2YzBEZzdqYmwvUjltUmRVdFZmOGppTDZORU1KakdQcDVvMkttRm9XRkhnVStnMkFpZzJpSjAzSGl5USsiLCJtYWMiOiJmY2U4ZTA5N2Q2ZjdhMjExODY0OGVlZjQxOWViY2FiMTY3MzliYmUxZmFlNDJkZmFhNWY0NWUzODkxNDJhODI0IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IllBL041QzhkMnp2QnhPazhWU2JndUE9PSIsInZhbHVlIjoicHl0T1cvUlFhM1lHK1N1a1p3STc4T1ZhMnowTmhMV2JuTnZ0Z2ZZdFBad2lycFZXelhtZys2L1FFZWNPcEhVVmQvVHpObVlRRUh6K3VyQWlQWlR1dWNUc0t4TlhRSVZPcGV6VnN1MkNydVdaYW9KckVTVW50VFlqaGRoYmREOXIiLCJtYWMiOiJhY2MzZjVhYjZmOTRjOTMxZmY0NjQ2YTZjYzNkZDJmY2FiOTUyYjkyODNiNjIxODNiMDlkOTZiODU4YjllZjFhIiwidGFnIjoiIn0%3D"
    );

    var raw = JSON.stringify({
      username: username,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/getProfile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProfile(result);
        // console.log(profile);
        setChecked(false);
      })
      .catch((error) => console.log("error", error));
  };

  const getPicture = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.unsplash.com/photos/random/?client_id=xpNXT57X0GEI_BNldxm4J4wbD6qTpR_0pVb2Gyqey9E",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setPicture(result.urls.raw);
        setCheckPic(false);
      })
      .catch((error) => console.log("error", error));
  };

  const getProfileRep = async () => {
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
        localStorage.setItem("IDSaleRep", result.employeeNumber);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProfile();
    getPicture();
    getProfileRep();
  }, []);

  const render = () => {
    if (check) {
      return (
        <div style={{ textAlign: "center", margin: "100px 0px" }}>
          <h1>Loading . . .</h1>
        </div>
      );
    } else {
      return (
        <div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-5" style={{ marginLeft: "60px" }}>
                <img
                  class="rounded-circle mt-5"
                  width="500px"
                  height="500px"
                  src={picture}
                />
              </div>

              <div
                class="col-md-5 border-right"
                style={{ marginLeft: "60px" }}
              >
                <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">{profile.customerName}</h4>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-6">
                      <label class="labels">Name</label>
                      <h5>{profile.contactFirstName}</h5>
                    </div>
                    <div class="col-md-6">
                      <label class="labels">Surname</label>
                      <h5>{profile.contactLastName}</h5>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <label class="labels">Mobile Number</label>
                      <h5>{profile.phone}</h5>
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Address Line 1</label>
                      <h5>{profile.addressLine1}</h5>
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Address Line 2</label>
                      <h5>{profile.addressLine2}</h5>
                    </div>
                    <div class="col-md-12">
                      <label class="labels">City</label>
                      <h5>{profile.city}</h5>
                    </div>
                    <div class="col-md-12">
                      <label class="labels">State</label>
                      <h5>{profile.State}</h5>
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Country</label>
                      <h5>{profile.country}</h5>
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Postal Code</label>
                      <h5>{profile.postalCode}</h5>
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Credit Limit</label>
                      <h5>{profile.creditLimit} $</h5>
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

  return (
    <div>
      <div>
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-15">
              <div class="card ">
                {" "}
                <div class="card-header py-3 d-flex ">
                  <div class="">
                    <h3 class="mb-0">Information</h3>
                  </div>

                  <div class="eiei d-flex">
                    <Link to="/salesrep">
                      <div class="mx-2" style={{ marginTop: "5px" }}>
                        <span class="border px-3 p-1 add-experience">
                          <i class="fa fa-plus"></i>&nbsp;SaleRep
                        </span>
                      </div>
                    </Link>

                    <Link to="/history">
                      <div class="mx-2" style={{ marginTop: "5px" }}>
                        <span class="border px-3 p-1 add-experience">
                          <i class="fa fa-plus"></i>&nbsp;History
                        </span>
                      </div>
                    </Link>

                    <Link to="/info">
                      <div class="mx-2" style={{ marginTop: "5px" }}>
                        <span class="border px-3 p-1 add-experience">
                          <i class="fa fa-plus"></i>&nbsp;Edit
                        </span>
                      </div>
                    </Link>
                  </div>
                  
                </div>
                {render()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {render()} */}
    </div>
  );
};

export default Profile;
