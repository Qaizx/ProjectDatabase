import { Outlet, Link, json } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const NavbarRegister = () => {
  return (
    <>
      <div class="navbar_info d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div style={{
            fontSize: "40px",
            fontWeight: "800",
          }} className="mx-3">
            D-FAMILY.
          </div>
          <Link to="/" className="gradient">
            Home
          </Link>
          <Link to="/shop" className="gradient">
            Shop
          </Link>

        </div>

        <div class="drop">
          <button class="gradient" style={{ height: "62px", width: "62px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7710/7710488.png"
              className="logo"
            ></img>
          </button>
          <div className="drop-content">
            <div>
              <Link to="/login" className="gradient" style={{ backgroundColor: "white" }}>
                Login{" "}
                <img
                  align="right"
                  style={{ marginLeft: "10px" }}
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828391.png "
                  alt=""
                  width="30"
                  height="30"
                ></img>
              </Link>
            </div>
            <div>
              <Link to="/register" className="gradient" style={{ backgroundColor: "white" }}>
                Register{" "}
                <img
                  align="right"
                  style={{ marginLeft: "10px" }}
                  src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png "
                  alt=""
                  width="30"
                  height="30"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavbarRegister;
