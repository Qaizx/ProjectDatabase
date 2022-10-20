import "./Login.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [validated, setValidated] = useState(false);
  const [disabled, setDisable] = useState(true);
  const [inputs, setInputs] = useState({});

  const navigate = useNavigate()

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: inputs.username,
      password: inputs.password,
      expiresIn: 100000,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if(result.status === 'ok'){
          localStorage.setItem('token', result.accessToken)
          navigate('/')
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <div class="head"> Login</div>

      <Form noValidate onChange={handleCheck} onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mt-4" controlId="formPlaintextEmail">
          <Form.Label
            style={{ margin: "0px 350px", fontSize: "30px" }}
            column
            sm="2"
          >
            Username / Email
          </Form.Label>
          <Col sm="5">
            <Form.Control
              required
              style={{ margin: "0px -290px", fontSize: "30px" }}
              type="text"
              placeholder="email"
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
            style={{ margin: "0px 350px", fontSize: "30px" }}
            column
            sm="2"
          >
            Password
          </Form.Label>
          <Col sm="5">
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

        <div style={{ textAlign: "center" }} className="mt-5">
          <Button
            type="submit"
            variant="success"
            size="lg"
            style={{ margin: "0px 10px" }}
            active
            disabled={disabled}
          >
            login
          </Button>{" "}
          <Button
            variant="warning"
            size="lg"
            style={{ margin: "0px 10px" }}
            active
            href="/register"
          >
            register
          </Button>{" "}
        </div>
      </Form>

      <div class="forgot">
        <label>FORGOT PASSWORD ?</label>
      </div>
    </div>
  );
};

export default Login;
