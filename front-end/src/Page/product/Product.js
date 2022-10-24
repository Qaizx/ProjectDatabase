import "./Product.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";

const Product = () => {
  const [product, setProduct] = useState();
  const [check, setChecked] = useState(true);
  const token = localStorage.getItem("token");
  const [disabled, setDisabled] = useState(true);

  const checkToken = () => {
    if (token == null) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
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
        <div>
          <div>
            <div class="container py-5">
              <div class="row d-flex justify-content-center my-4">
                <div class="col-md-10">
                  <div class="card ">
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
                          <button disabled={disabled}>Add to cart</button>
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
      <div>
        <h1> This is product page</h1>
      </div>
      {render()}
    </div>
  );
};

export default Product;
