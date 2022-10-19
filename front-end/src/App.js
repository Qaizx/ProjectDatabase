import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/home/Home";
import NavbarRegister from "./component/NavbarRegister";
import NavbarLogin from "./component/NavbarLogin";
import Login from "./Page/login/Login";
import Register from "./Page/register/Register";
import Info from "./Page/info/Info";
import Shop from "./Page/shop/Shop";
import Cart from "./Page/cart/Cart";
import Product from "./Page/product/Product";
import Payment from "./Page/payment/Payment";


function App() {
  const [checkLogin, setCount] = useState(false);

  const handleClick = (event, check) => {
    console.log(checkLogin);
    setCount((current) => check);
  };
  console.log(checkLogin);

  const ro = () => {
    if (checkLogin == false) {
      return (
        <Route path="/" element={<NavbarRegister />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login handleClick={handleClick} />} />
          <Route path="register" element={<Register />} />
          <Route path="shop" element={<Shop />}/>
          <Route path="cart" element={<Cart />}/>
          <Route path="product" element={<Product />}/>
          <Route path="payment" element={<Payment />}/>
        </Route>
      );
    } else {
      <Route path="/log" element={<NavbarLogin />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
      </Route>;
    }
  };

  return (
    <div>
      <Routes>
        {ro()}
      </Routes>
    </div>
  );
}

export default App;
