import "./Login.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React, { useState } from "react";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <div class="head"> Login</div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
          >
            login
          </Button>{" "}
          <Button
            variant="warning"
            size="lg"
            style={{ margin: "0px 10px" }}
            active
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
