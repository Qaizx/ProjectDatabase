import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Info.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Info() {
  const [profile, setProfile] = useState();
  const [check, setChecked] = useState(true);
  const CryptoJS = require("crypto-js");
  const token = localStorage.getItem("token");
  const username = CryptoJS.enc.Base64.parse(token).toString(CryptoJS.enc.Utf8);
  const [inputs, setInputs] = useState({});

  const getProfile = async () => {
    // console.log(username);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IlJJOFBKQ20xRjRUR0NhUCtTUEdyMHc9PSIsInZhbHVlIjoidnJySzRYMktmYVpUZkVzRDcrR0dQZjBBRDdkc0NpbmJ5cUdVdEc4T0p5Y0V5L1h3REVvUko2cWVvTUdaTFR4bm1lM3Arcmg1QklTTDBQMWM1RlRiVGdvN2l6RWt1MzNPUURnZ1hWSVhwL3VLYWlBTmFmc1ZYc1RkNFgrM2pBRUkiLCJtYWMiOiJjODQ2ZjBkNDI3ZTEwMTQyMjNiNmQ5NTJiZWIyYmI1NzViZTg0OWI1Y2E3OTdkNTE1NDIxNTY1ZDdhNWZjY2M5IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjhHUUk5cW91blA0YkZQVTFiVjl2dFE9PSIsInZhbHVlIjoiTVJJa3lzUjk5V3kwdFRmVkNjMDN3QXAxQjhhM2JFN0FabDZpT2VFbWtaWTMrT0tIRUZqQ2I0VTB4VlpFYVNiMXZiZElUZWd6c0N1RHhFR0Y3YlBmNHVjQmN2TnM3eWRQNmJ6NjJSU1psdFFNVDZvcExwT2pwWjgvY2dxMnA0SjIiLCJtYWMiOiIzYjE5ZTZlOTU4OWI1ODE3ZmY2MDZkOGM0OTBjMGM2NTI5MmY4MDAyYzdhZmYwMjI3NGZmYTg0YjM4ODAyMWU0IiwidGFnIjoiIn0%3D"
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
        console.log(profile);
        setChecked(false);
      })
      .catch((error) => console.log("error", error));
  };

  const pushInfo = () => {
    console.log(inputs);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6Im1hdjNYM0Q5R01zdTlIUnFIdncwMFE9PSIsInZhbHVlIjoiYm5mckY1UGxHR2MxSGFRYjErT1F5cTZueFdjODRsaHd4eFpISkU5L3ZvUDZUWkQvRmVMeE5VTXlzRkg2cmlnaGlUL3NjcHZOR2J5Nkd0UWR3N1BRdlNGdEVyUFNvVHVaaVFOSHRwZWNZK2ozS0kxRmVPQ01RdG5KdUgrMHpsU2IiLCJtYWMiOiI1NTJmZjA0MzBkZjQ4NWM4NTQ2NGRmNmExZmJkZmYyOTFiNjgwNTcwN2VjNjgyNWM3NDFkOTQ0NWY2OThkYjk5IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6Ii9Ta3RNaHFCSS85NnovbW9jZ3JQalE9PSIsInZhbHVlIjoiOXA5SHVXYzIzNGF3UmM2QktoM0tKM3NHY0NCeVBjeVh5UVFKK29FZktxMFVrczRydE5HM2hmeUZVK05KeWNPNld4dGRTcmR2MGdwcGhRL0pHNjJLeTRUOUlqUDUvSVlhS3NvVkRtSVJvRW5JbFNUYmY3VGNSUHk0V3Y5RHZma0MiLCJtYWMiOiI0OTMyYTRlNTk4ZmM2NjZhNDliZDAxNmEzNTg2NmJlM2MxNDZlOTc3MWFiNTg3NjE0YzEyMzFjZGE0Y2QwNGRmIiwidGFnIjoiIn0%3D"
    );

    var raw = JSON.stringify({
      username: username,
      customerName: inputs.name,
      contactLastName: inputs.lname,
      contactFirstName: inputs.fname,
      phone: inputs.phone,
      addressLine1: inputs.addr1,
      addressLine2: inputs.addr2,
      city: inputs.city,
      state: inputs.state,
      postalCode: inputs.postalCode,
      country: inputs.country,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/updateProfile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        window.location.href = "/profile";
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const ren = () => {
    if (check) {
      return (
        <div style={{ textAlign: "center", margin: "100px 0px" }}>
          <h1>Loading . . .</h1>
        </div>
      );
    } else {
      return (
        <>
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span class="font-weight-bold">{profile.customerName}</span>

              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={profile.contactFirstName}
                    name="fname"
                    value={inputs.fname || ""}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={profile.contactLastName}
                    name="lname"
                    value={inputs.lname || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={profile.customerName}
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={profile.phone}
                    name="phone"
                    value={inputs.phone || ""}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Address Line 1</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={profile.addressLine1}
                    name="addr1"
                    value={inputs.addr1 || ""}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Address Line 2</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={profile.addressLine2}
                    name="addr2"
                    value={inputs.addr2 || ""}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">City</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={profile.city}
                    name="city"
                    value={inputs.city || ""}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">State</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={profile.state}
                    name="state"
                    value={inputs.state || ""}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={profile.country}
                    name="country"
                    value={inputs.country || ""}
                    onChange={handleChange}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Postal Code</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={profile.postalCode}
                    name="postalCode"
                    value={inputs.postalCode || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div class="mt-5 text-center">
                <Link to="/profile">
                  <button
                    class="btn btn-primary button3"
                    type="button"
                    style={{ marginRight: "20px" }}
                  >
                    Cancel
                  </button>
                </Link>
                <button
                  class="btn btn-primary button1"
                  type="button"
                  onClick={pushInfo}
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return (

    <div>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">{ren()}</div>
      </div>
    </div>
  );
}

export default Info;
