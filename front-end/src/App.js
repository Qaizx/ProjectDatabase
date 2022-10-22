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
import Cart from "./Page/cart/Cart";
import Product from "./Page/product/Product";
import Payment from "./Page/payment/Payment";
import Profile from "./Page/profile/Profile";


function App() {
  const [checkLogin, setLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + token
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/auth/user", requestOptions)
      .then((response) => response.json())
      .then((result)=> {
        if(result.status === 'ok'){
          setLogin(true)
        }else{
          setLogin(false)
        }
      })
      .catch((error) => console.log("error", error));
  }, []);

  const ro = () => {
    if (checkLogin) {
      return(
        <Route path="/" element={<NavbarLogin />}>
        <Route index element={<Home />} />
        <Route path="info" element={<Info />} />
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
          <Route path="payment" element={<Payment />}/>
          <Route path="profile" element={<Profile />}/>
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
