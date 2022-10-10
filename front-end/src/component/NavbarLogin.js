import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { Button, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavbarLogin = () => {
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
                title="Dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/login">User</NavDropdown.Item>
                <NavDropdown.Item href="/register">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
};

export default NavbarLogin;
