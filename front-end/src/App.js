import "./App.css";
import React, { useState, useEffect } from "react";
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
import Payment from "./Page/payment/Payment";
import Profile from "./Page/profile/Profile";

function App() {
  const [checkLogin, setLogin] = useState(false);
  const CryptoJS = require("crypto-js");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token == null) {
      setLogin(false);
    } else {
      setLogin(true);
      const username = CryptoJS.enc.Base64.parse("aW5zZWN1cmVCb2JvbGluazY=").toString(
        CryptoJS.enc.Utf8
      );
      console.log(username);
    }
  }, []);

  const ro = () => {
    if (checkLogin) {
      return (
        <Route path="/" element={<NavbarLogin />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />}/>
          <Route path="info" element={<Info />}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="payment" element={<Payment />}/>
          <Route path="product" element={<Product />}/>
        </Route>
      );
    } else {
      return (
        <Route path="/" element={<NavbarRegister />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="shop" element={<Shop />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="product" element={<Product />}/>
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
