import "./Login.css";
import { Button, Row, Form, Col } from "react-bootstrap";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "@remix-run/router";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [disabled, setDisable] = useState(true);
  const [inputs, setInputs] = useState({});
  const MySwal = withReactContent(Swal);
  const browserHistory = createBrowserHistory({ window });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleCheck = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setDisable(true);
    } else {
      setDisable(false);
    }

    setValidated(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    const CryptoJS = require("crypto-js");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IkRDd2lMVUR6Sjl3NEQ1V0ZpRzlJc2c9PSIsInZhbHVlIjoicU84NEgvdDRBd0NkZjdDU1JLZndyRFoyS2ZLNzdGbkZjMzFRK012ZDZVWG5uTXlTcStwS0dudzhNbmlyUTAxRWhwbUMveFg4Q2wxaXFQTUhNVjBGK3ovNVBDTkZYVEZFa1haNklGWWh4MEVvdHVCWlUxV1VJVkMrbHZSUS9pYm8iLCJtYWMiOiIwYTU1M2IyM2NkY2QzYzI2OGMwYzUwMTFhY2M1MjQzMGU1OWVmNWRiOGI0NTMwN2Y5ODdiMDU5M2EwYTRlMjQyIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6InRtdmpCR0JSNWUwaVRWdVpvV0NObUE9PSIsInZhbHVlIjoiREZaazlSYkR2Y0FNQ1I1bkhsQTZiR2JTWWNjSFZDOWNqei9vcVVrQ1B6S0x6aEFINFI2RStIbG1PZUEzVkp4TFc0eWk2cCs2ZjhUNWhydzJxQk50L2E4NmZMeHRMS3gra0hzb0xnSnJVeVhVeVkwTDBKOUVwQlNiQUJQNjNSdFQiLCJtYWMiOiJiY2M2YTM4ODA0ODZkYjVjZGQ5NzYxYWM5YzhiODcyNjU2MzZjYTVhNWE3Yjc5MzhlMzEyMThjYWJkYmU0MzI4IiwidGFnIjoiIn0%3D"
    );

    var raw = JSON.stringify({
      username: inputs.username,
      password: inputs.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const test = () => {
      console.log("this");
    };

    //insecureBobolink6
    //Qo196EqODjjreL4C3STk

    fetch("http://127.0.0.1:8000/api/users/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === "ok") {
          let text = CryptoJS.enc.Base64.stringify(
            CryptoJS.enc.Utf8.parse(inputs.username)
          );
          localStorage.setItem("token", text);
          MySwal.fire({
            title: <strong>Login Success</strong>,
            icon: "success",
          }).then((value) => {
            window.location.href = "/";
          });
        } else if (result.error === "Password is not matched.") {
          MySwal.fire({
            title: <strong>Login fail</strong>,
            icon: "error",
          });
        } else {
          MySwal.fire({
            title: <strong>Login Fail</strong>,
            icon: "error",
          });
        }
      })
      .catch((error) =>
        MySwal.fire({
          title: <strong>Login Fail</strong>,
          icon: "error",
        })
      );
  };

  return (
    <div style={{ fontFamily: "JetBrains Mono" }} className="d-flex flex-column">
      <div>
        <div class="title">Login</div>

        <Form noValidate onChange={handleCheck} onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mt-4" controlId="formPlaintextEmail">
            <Form.Label
              style={{ margin: "0px 20%", fontSize: "30px" }}
              column
              sm="2"
            >
              Username/Email
            </Form.Label>
            <Col sm="4">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="text"
                placeholder="Username/Email"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </Col>

            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Row} className="mt-4" controlId="formPlaintextPassword">
            <Form.Label
              style={{ margin: "0px 20%", fontSize: "30px" }}
              column
              sm="2"
            >
              Password
            </Form.Label>
            <Col sm="4">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="password"
                placeholder="Password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>
        </Form>
      </div>

      <div style={{ textAlign: "center" }} className="mt-5 d-flex justify-content-center">
        <Button
          type="submit"
          variant="success"
          size="lg"
          style={{ margin: "0px 10px", opacity: "1", color: "black" }}
          active
          disabled={disabled}
        >
          Login
        </Button>{" "}
        <Button
          variant="warning"
          size="lg"
          style={{ margin: "0px 10px" }}
          active
          href="/register"
        >
          Register
        </Button>{" "}
      </div>
    </div>
  );
};

export default Login;
