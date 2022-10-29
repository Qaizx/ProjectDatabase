import "./Register.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [disabled, setDisable] = useState(true);
  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();

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
      email: inputs.email,
      password: inputs.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/users/register", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.status === 'ok'){
          MySwal.fire({
            title: <strong>Register Success</strong>,
            icon: "success",
          }).then((value) => {
            window.location.href = "/login";
          });
        }else{
          MySwal.fire({
            title: <strong>Register Fail</strong>,
            icon: "error",
          })
        }
        
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <div class="head"> Register</div>

      <Form noValidate onChange={handleCheck} onSubmit={handleSubmit}>
        <div>
          <Form.Group as={Row} className="mt-4" controlId="formPlaintextEmail">
            <Form.Label
              style={{ margin: "0px 350px", fontSize: "30px" }}
              column
              sm="2"
            >
              username
            </Form.Label>
            <Col sm="4">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="text"
                placeholder="name"
                name="username"
                value={inputs.username || ""}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-4" controlId="formPlaintextEmail">
            <Form.Label
              style={{ margin: "0px 350px", fontSize: "30px" }}
              column
              sm="2"
            >
              email
            </Form.Label>
            <Col sm="4">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="email"
                placeholder="example@gmail.com"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-4" controlId="formPlaintextEmail">
            <Form.Label
              style={{ margin: "0px 350px", fontSize: "30px" }}
              column
              sm="2"
            >
              password
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
        </div>

        <div
          style={{ textAlign: "right", margin: "0px 300px" }}
          className="mt-5"
        >
          <Button
            type="submit"
            variant="success"
            size="lg"
            style={{ margin: "0px 10px" }}
            active
            // href="/login"
            disabled={disabled}
          >
            confirm
          </Button>{" "}
        </div>
      </Form>
    </div>
  );
};

export default Register;
