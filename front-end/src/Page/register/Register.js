import "./Register.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
      fname: inputs.fname,
      lname: inputs.lname,
      username: inputs.username,
      password: inputs.password,
      email: inputs.email,
      avatar: inputs.avatar,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/users/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result.status === 'ok'){
          navigate('/login')
        }else{
          console.log(result.message);
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
              fname
            </Form.Label>
            <Col sm="5">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="text"
                placeholder="name"
                name="fname"
                value={inputs.fname || ""}
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
              lname
            </Form.Label>
            <Col sm="5">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="text"
                placeholder="email"
                name="lname"
                value={inputs.lname || ""}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mt-4"
            controlId="formPlaintextPassword"
          >
            <Form.Label
              style={{ margin: "0px 350px", fontSize: "30px" }}
              column
              sm="2"
            >
              username
            </Form.Label>
            <Col sm="5">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="text"
                placeholder="Name"
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
              password
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

          <Form.Group as={Row} className="mt-4" controlId="formPlaintextEmail">
            <Form.Label
              style={{ margin: "0px 350px", fontSize: "30px" }}
              column
              sm="2"
            >
              email
            </Form.Label>
            <Col sm="5">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="email"
                placeholder="Confirm Password"
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
              avatar
            </Form.Label>
            <Col sm="5">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="text"
                placeholder="Confirm Password"
                name="avatar"
                value={inputs.avatar || ""}
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
