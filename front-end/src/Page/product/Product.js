import "./Product.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Product = () => {
  const [product, setProduct] = useState();
  const [check, setChecked] = useState(true);
  const token = localStorage.getItem("token");
  const [disabled, setDisabled] = useState(true);
  const CryptoJS = require("crypto-js");
  var username = ""

  const MySwal = withReactContent(Swal);

  const checkToken = () => {
    if (token == null) {
      setDisabled(true);
    } else {
      username = CryptoJS.enc.Base64.parse(token).toString(CryptoJS.enc.Utf8);
      setDisabled(false);
    }
  };

  const typeFilter = (type) => {
    console.log(type);
    localStorage.setItem("type", type);
    window.location.href = "/shop";
  };

  const handleClick = () => {
    MySwal.fire({
      title: <strong>Add Success</strong>,
      icon: "success",
    });

    const IDProduct = localStorage.getItem("IDProduct");
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IldHQXF5UzNuM0NkQ0pZQ3huQ3hJSkE9PSIsInZhbHVlIjoiWU1aeVhBQUNZYmpLc1BITytPL0Z4VDhMTStiQUdBVzJ0d2ZoSGNCeU5RYmF3aXRDbUQzZDBaWHJTYklrQUI2NVBSR1BHd3BQTnNoTFdPSHR2Sll0dWFMTDFjd3JLMEpjeHNBZ3dKY1RBekFLSG5EWHRiQk1XNXJBc2lCTjhEMG4iLCJtYWMiOiI2ZjgwZGFhZWM1NTA0NzkzMDBkM2IwYmVjMDM2ZjAwNDUxNzNjOGIzNTU5NGYzMzEzODdlMzUyMTU4MzQxMjU5IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6ImVLS25tSS95QS9BMmE5a0NmL0p6YWc9PSIsInZhbHVlIjoiWklzU05TWXlWVVc1ZEI5QVNwQUVWQUd4OHhJTkkwbTFqRVFrUnd1M0dYZExvd0N3b3JnNEo5aXVRQ2Fqc2F4L3Q2am5VWnhJRy9NV2VjL3ZNMFUyQzB4b3lQcTRxcTZIbFZMQ21ZaUh3NGlsVWdmaEtJTXFaVzJDUkpUYzBrMFkiLCJtYWMiOiIxOTdlODg2NTZmNTVjMDgzNTQwNTg3YmVlNGUxMTVkOTY3NjM2ZTFlZDJlOTA4ZWQxY2Y4MWNmMGIxYTA0NzAyIiwidGFnIjoiIn0%3D"
    );

    var raw = JSON.stringify({
      username: username,
      productCode: IDProduct,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/addToCart", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const initProducts = async () => {
    const IDProduct = localStorage.getItem("IDProduct");
    const url = "http://127.0.0.1:8000/api/getProductInfo/";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      productCode: IDProduct,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setChecked(false);
        // console.log(result);
        setProduct(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    initProducts();
  }, []);

  const render = () => {
    if (check) {
      return (
        <div style={{ textAlign: "center", margin: "100px 0px" }}>
          <h1>Loading . . .</h1>
        </div>
      );
    } else {
      return (
        <div style={{ fontFamily: "JetBrains Mono" }}>
          <div>
            <div class="container">
              <div class="row d-flex justify-content-center my-4">
                <div class="col-md-10">
                  <div class="card">
                    <div class="card-header py-3">
                      <h3 class="mb-0">{product.productName}</h3>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-5">
                          <img src={product.url} class="w-100" alt="Product" />
                        </div>
                        <div class="col mt-2">
                          <p class="card-text">
                            <b>Type :</b> {product.productLine}
                          </p>
                          <p class="card-text">
                            <b>Description of type :</b>{" "}
                            {product.textDescription}
                          </p>
                          <p class="card-text">
                            <b>Scale :</b> {product.productScale}
                          </p>
                          <p class="card-text">
                            <b>Vendor :</b> {product.productVendor}
                          </p>
                          <p class="card-text">
                            <b>Description of Product :</b>{" "}
                            {product.productDescription}
                          </p>
                          <p class="card-text">
                            <b>Stock :</b> {product.quantityInStock}
                          </p>
                          <p class="card-text">
                            <b>Price :</b> {product.buyPrice}
                          </p>
                          <p class="card-text">
                            <b>MSRP :</b> {product.MSRP}
                          </p>
                          <button disabled={disabled} onClick={handleClick} class="add-experience">
                            Add product
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div onMouseMove={checkToken}>
      <div class="d-flex flex-column">
        <div class="titleProduct">
          Products
        </div>
        {render()} 
      </div>

    </div>
  );
};

export default Product;
