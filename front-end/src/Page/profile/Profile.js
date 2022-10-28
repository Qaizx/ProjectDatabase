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
    })

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
    // getPicture();
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
          <div>
            <div class="container py-5">
              <div class="row d-flex justify-content-center my-4">
                <div class="col-md-10">
                  <div class="card ">
                    <div class="card-header py-3 d-flex ">
                      <div class="">
                        <h3 class="mb-0">{profile.customerName}</h3>
                      </div>

                      <div class="eiei d-flex">
                        <Link to="/salesrep">
                          <div class="mx-2">
                            <button class="">SalesRep</button>
                          </div>
                        </Link>

                        <div class="mx-2    ">
                          <Link to="/history">
                            <button class="">History</button>
                          </Link>
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
                          <img src={picture} class="w-100" alt="Profile Pic" />
                        </div>
                        <div class="col mt-2">
                          <h2 class="mb-3">
                            Contact : {profile.contactFirstName}{" "}
                            {profile.contactLastName}
                          </h2>
                          <h2 class="mb-3">Phone : {profile.phone}</h2>
                          <h2 class="mb-3">
                            Address 1 : {profile.addressLine1}
                          </h2>
                          <h2 class="mb-3">
                            Address 2 : {profile.addressLine2}
                          </h2>
                          <h2 class="mb-3">City : {profile.city}</h2>
                          <h2 class="mb-3">State : {profile.state}</h2>

                          <h2 class="mb-3">Country : {profile.country}</h2>
                          <h2 class="mb-3">
                            Postal Code : {profile.postalCode}
                          </h2>
                          <h2 class="mb-3">
                            Credit Limit : {profile.creditLimit}${" "}
                          </h2>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <Link to="/money">
                          <button>hack money</button>
                        </Link>
                      </div>
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
        <h1 className="headerText"> User Information</h1>
      </div>
      {render()}
    </div>
  );
};

export default Profile;
