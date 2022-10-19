import "./Register.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React, { useState } from "react";

const Register = () => {  
  const [validated, setValidated] = useState(false);
  const [disabled, setDisable] = useState(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setDisable(true);
    }else{
      setDisable(false);
    }

    setValidated(true);
  };


  return (
    <div>
      <div class="head"> Register</div>


      <Form noValidate onChange={handleSubmit}>
        <div>
          <Form.Group as={Row} className="mt-4" controlId="formPlaintextEmail">
            <Form.Label
              style={{ margin: "0px 350px", fontSize: "30px" }}
              column
              sm="2"
            >
              Username
            </Form.Label>
            <Col sm="5">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="text"
                placeholder="name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-4" controlId="formPlaintextEmail">
            <Form.Label
              style={{ margin: "0px 350px", fontSize: "30px" }}
              column
              sm="2"
            >
              Email
            </Form.Label>
            <Col sm="5">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="text"
                placeholder="email"
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
              Password
            </Form.Label>
            <Col sm="5">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="password"
                placeholder="Password"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mt-4" controlId="formPlaintextEmail">
            <Form.Label
              style={{ margin: "0px 350px", fontSize: "30px" }}
              column
              sm="2"
            >
              Confirm Password
            </Form.Label>
            <Col sm="5">
              <Form.Control
                required
                style={{ margin: "0px -290px", fontSize: "30px" }}
                type="password"
                placeholder="Confirm Password"
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
            href="/login"
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
