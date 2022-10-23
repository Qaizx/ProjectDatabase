import "./Product.css";
import { Button, Row, Form, Col, Container } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";

const Product = () => {
  const [product, setProduct] = useState();
  const [check, setChecked] = useState(true);
  const [Des, setDes] = useState()
  const [checkDes, setCheckDes] = useState(true)

  const initProducts = async () => {
    const IDProduct = localStorage.getItem("IDProduct");
    const url = "http://127.0.0.1:8000/api/products/" + IDProduct;

    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IldZOE12U1d5WVpqVkg4WUdoVDdZUlE9PSIsInZhbHVlIjoiQUIxNndzdzh5UkwwYVB5RFNZVWkvR1Axa1BkYW5zRXM1bE1hVjNUZHRjNlFNU2xRd3pNSWZOS25JZEwwWW4zZHU2bDlybGdmSFMwUnFtalNhNmxnUXlTNEdqbkNmdzJ4L2FKNFBvb1dSdlMyTEF5c0VUVVVmWkE2MmpuNVNwdEEiLCJtYWMiOiI0MzVlOTRiZmYwYWE4MGRlMTMxOWExZDU0NGEzNDAyZWM5NGQ1MmQ3Y2ZkZTU5MzljMzg3M2ZkYjVkNzYwZGIyIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6ImZYZjRYM1phdFdiazdpUnR5eFEvdUE9PSIsInZhbHVlIjoiWWorNnZlamRqNW4yNVJ3akdJZFF1dzRoVjBKbnJ5REYwRlFScGx2bFB1V3Z2aG5GMk9QelVQbkcxcVV3amYrTjNtdVJtNDJ5M1FYUXYzS21ZbEZPUnJLTER2L2J5T0NGeHV0RlJOU09pWUZmQVNlenZKcVRSKzJ2cWNueGR5cXQiLCJtYWMiOiJiOWQ3NmE2ZmM3ZTcwNGIzZjNkYTE1Y2EwYTliYWNlMWQ5Nzg0NjcxZTFlZDMwOTFlMmQ3NjI2YjY2ODhjYjlkIiwidGFnIjoiIn0%3D"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
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

  const getDesType = async() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch("http://127.0.0.1:8000/api/productlines", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCheckDes(false)
        setDes(result)
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    initProducts();
    getDesType()
  }, []);

  const render = () => {

    if (check || checkDes) {
    } else {

        
      return (
        <div>
          <div>
            <h1> This is product page</h1>
          </div>
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
                            <b>Description of type :</b> {Des.textDescription}
                          </p>
                          <p class="card-text">
                            <b>Scale :</b> {product.productScale}
                          </p>
                          <p class="card-text">
                            <b>Vendor :</b> {product.productVendor}
                          </p>
                          <p class="card-text">
                            <b>Description of Product :</b> {product.productDescription}
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
                          <button>Add to cart</button>
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

  return <div>{render()}</div>;
};

export default Product;
