import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const NavbarLogin = () => {
  const [profile, setProfile] = useState();
  const [check, setChecked] = useState(true);
  const CryptoJS = require("crypto-js");
  const MySwal = withReactContent(Swal)

  const handleLogout = async () => {
    localStorage.removeItem("token");
    await MySwal.fire({
      title: <strong>Logout Success</strong>,
      icon: 'success'
    })
    window.location.href = "/";
  };

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    const username = CryptoJS.enc.Base64.parse(token).toString(
      CryptoJS.enc.Utf8
    );

    // console.log(username);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IlJJOFBKQ20xRjRUR0NhUCtTUEdyMHc9PSIsInZhbHVlIjoidnJySzRYMktmYVpUZkVzRDcrR0dQZjBBRDdkc0NpbmJ5cUdVdEc4T0p5Y0V5L1h3REVvUko2cWVvTUdaTFR4bm1lM3Arcmg1QklTTDBQMWM1RlRiVGdvN2l6RWt1MzNPUURnZ1hWSVhwL3VLYWlBTmFmc1ZYc1RkNFgrM2pBRUkiLCJtYWMiOiJjODQ2ZjBkNDI3ZTEwMTQyMjNiNmQ5NTJiZWIyYmI1NzViZTg0OWI1Y2E3OTdkNTE1NDIxNTY1ZDdhNWZjY2M5IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IjhHUUk5cW91blA0YkZQVTFiVjl2dFE9PSIsInZhbHVlIjoiTVJJa3lzUjk5V3kwdFRmVkNjMDN3QXAxQjhhM2JFN0FabDZpT2VFbWtaWTMrT0tIRUZqQ2I0VTB4VlpFYVNiMXZiZElUZWd6c0N1RHhFR0Y3YlBmNHVjQmN2TnM3eWRQNmJ6NjJSU1psdFFNVDZvcExwT2pwWjgvY2dxMnA0SjIiLCJtYWMiOiIzYjE5ZTZlOTU4OWI1ODE3ZmY2MDZkOGM0OTBjMGM2NTI5MmY4MDAyYzdhZmYwMjI3NGZmYTg0YjM4ODAyMWU0IiwidGFnIjoiIn0%3D"
    );

    var raw = JSON.stringify({
      username: username,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/getProfile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProfile(result);
        // console.log(profile);
        setChecked(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProfile();
  }, []);

  const render = () => {
    if (!check) {
      return (
        <div class="navbar_info d-flex justify-content-between align-items-center">
          <div>
            <a href="/" class="gradient">Home</a>
            <a href="/shop" class="gradient">Shop</a>
          </div>

          <div class="d-flex align-items-center">
            <div class="gradient d-flex align-items-center" style={{ height: "62px", padding: "10px" , fontSize:"20px"}}>
              Credit : {profile.creditLimit}$
            </div>
            <div class="drop">
              <button class="gradient" style={{ height: "62px", width: "62px" }}>
                <img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" className="logo"></img>
              </button>
              <div className="drop-content">
                <div>
                  <a href="/profile">
                    Profile{" "}
                    <img
                      style={{ float: "right" }}
                      src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png "
                      width="30"
                      height="30"
                    ></img>
                  </a>
                </div>
                <div>
                  <a href="/cart">
                    Cart{" "}
                    <img
                      style={{ float: "right" }}
                      src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png "
                      width="30"
                      height="30"
                    ></img>
                  </a>
                </div>
                <a onClick={handleLogout} type="submit">
                  Logout{" "}
                  <img
                    style={{ float: "right" }}
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png "
                    width="30"
                    height="30"
                  ></img>
                </a>
              </div>
            </div>
          </div>

        </div>
      );
    } else {
      return (
        <div class="navbar_info">
          <a href="/" className="gradient">Home</a>
          <a href="/shop" className="gradient">Shop</a>
          <div class="drop">
            <button class="dropbtn">
              <img
                src=" https://cdn-icons.flaticon.com/svg/3917/3917035.svg?token=exp=1666540146~hmac=7f424a8d412c79789ebc16dcf4da4c50 "
                width="50"
                height="30"
                alt=""
                title=""
                class="img-small"
              />
            </button>
            <div className="drop-content">
              <div>
                <a href="/login">
                  Login{" "}
                  <img
                    style={{ float: "right" }}
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png "
                    width="30"
                    height="30"
                  ></img>
                </a>
              </div>
              <div>
                <a href="/register">
                  Register{" "}
                  <img
                    style={{ float: "right" }}
                    src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png "
                    width="30"
                    height="30"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <>
      {render()}
      <Outlet />
    </>
  );
};

export default NavbarLogin;
