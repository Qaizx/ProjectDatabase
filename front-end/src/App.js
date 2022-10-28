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
import Parent from "./Parrent"

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

  return (
    <div>
      <Routes>{ro()}</Routes>
      {/* <Parent/> */}
    </div>
  );
}

export default App;
