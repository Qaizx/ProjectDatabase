import "./App.css";
import React, { useState, useEffect, useSearchParams } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/home/Home";
import NavbarRegister from "./component/NavbarRegister";
import NavbarLogin from "./component/NavbarLogin";
import Login from "./Page/login/Login";
import Register from "./Page/register/Register";
import Info from "./Page/info/Info";
import Shop from "./Page/shop/Shop";
import Cart from "./Page/cart/cart";
import Product from "./Page/product/Product";
import History from "./Page/history/History";
import Profile from "./Page/profile/Profile";
import Salesrep from "./Page/salesrep/Salesrep";
import Money from "./Page/hackmoney/Money";
import "@fontsource/jetbrains-mono";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function App() {

  const [checkLogin, setLogin] = useState(false);
  const CryptoJS = require("crypto-js");
  const token = localStorage.getItem("token");

  const pathLinkNotLogin = ["/", "/login", "/register", "/shop", "/product"];
  const pathLinkLogin = [
    "/",
    "/profile",
    "/info",
    "/shop",
    "/payment",
    "/salesrep",
    "/cart",
    "/product",
    "/history"
  ];

  useEffect(() => {
    // console.log(token);
    if (token == null) {
      setLogin(false);
    } else {
      setLogin(true);
      // console.log(username);
    }
  }, []);

  const ro = () => {
    if (checkLogin) {
      if (!pathLinkLogin.includes(window.location.pathname)) {
        window.location.assign("/");
      }
      return (
        <Route path="/" element={<NavbarLogin />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="info" element={<Info />} />
          <Route path="shop" element={<Shop />} />
          <Route path="history" element={<History />} />
          <Route path="product" element={<Product />} />
          <Route path="salesrep" element={<Salesrep />} />
          <Route path="cart" element={<Cart />} />
          <Route path="money" element={<Money />} />
        </Route>
      );
    } else {
      if (token == null) {
        if (!pathLinkNotLogin.includes(window.location.pathname)) {
          window.location.assign("/");
        }
      }

      return (
        <Route path="/" element={<NavbarRegister />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product" element={<Product />} />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
      );
    }
  };

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div>

      <Routes id = "head" >{ro()}</Routes>
      {/* <Parent/> */}
      <Particles
        className="background"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#FAD6A5",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#61764B",
            },
            links: {
              color: "#61764B",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <button class="myBtn">
        <a onClick={topFunction} style={{ color: "white" }}>
          Top
        </a>
      </button>
    </div>

  );
}

export default App;
