import { Outlet, Link, json } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { Axios } from "axios";

const NavbarRegister = () => {
  
  return (
    
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <div className="me-auto"></div>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Login/Reg"
                menuVariant="dark"
                style={{ margin: "0px 10px" }}
                align="end"
              >
                <div style={{ textAlign: "right" }}>
                  <NavDropdown.Item href="/login" >Login</NavDropdown.Item>
                  <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </div>

              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavbarRegister;
