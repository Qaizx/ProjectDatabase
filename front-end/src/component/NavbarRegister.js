import { Outlet, Link, json } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { Axios } from "axios";

const NavbarRegister = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  return (
    // <>
    //   <nav>
    //     <div class="navbar-left">
    //       <Link to="/" style={{ float: "left" }}>
    //         Home
    //       </Link>
    //       <Link to="/register" style={{ float: "right" }}>
    //         register
    //       </Link>
    //       <Link to="/login" style={{ float: "right" }}>
    //         Login
    //       </Link>
    //     </div>
    //   </nav>
    //   <Outlet />
    // </>
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
                title="Dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
};

export default NavbarRegister;
