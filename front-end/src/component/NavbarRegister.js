import { Outlet, Link, json } from "react-router-dom";
import "./Navbar.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const NavbarRegister = () => {
  return (
    <>

      <div class="navbar_info">
        <a href="/">Home</a>
        <a href="/shop">shop</a>
        <div class="drop">
          <button class="dropbtn">
            <img
              src=" https://cdn-icons.flaticon.com/svg/3917/3917035.svg?token=exp=1666540146~hmac=7f424a8d412c79789ebc16dcf4da4c50 "
              width="30"
              height="30"
              alt=""
              title=""
              class="img-small"
            />
          </button>
          <div className="drop-content">
            <div>
              <a href="/login">Login <img style={{float: "right"}} src="https://cdn-icons-png.flaticon.com/512/1828/1828391.png " width="30"  height="30"></img></a>
            </div>
            <a href="/register">Register <img style={{float: "right"}} src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png " width="30"  height="30"></img></a>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavbarRegister;
