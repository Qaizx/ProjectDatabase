import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { Button, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavbarLogin = () => {

  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.href = '/'
  }

  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/shop">shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            <div className="me-auto"></div>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="User"
                menuVariant="dark"
                style={{ margin: "0px 10px" }}
                align="end"
              >
                <div style={{ textAlign: "right" }}>
                  <NavDropdown.Item href="/profile" >profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>logout</NavDropdown.Item>
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

export default NavbarLogin;
