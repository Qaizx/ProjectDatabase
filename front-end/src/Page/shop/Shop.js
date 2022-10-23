import "./Shop.css";
import { Button, Row, Form, Col, Container, Card } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [check, setChecked] = useState(true);

  const initProducts = async () => {
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

    fetch("http://127.0.0.1:8000/api/products", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setChecked(false);
        console.log(result);
        setProducts(result)
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    initProducts();
  }, []);
  const render = () => {
    if (check)
      return (
        <div className="text-center space-y-3">
          <p className="text-2xl font-semibold">Historical price</p>
          <p className="text-2xl">Loading ...</p>
        </div>
      );
    else {
      // console.log(1);
      const listItems = products.map((tasks) => (
        // <div class="col-4" style={{ padding: "20px" }}>
        //   <div class="" className="size">
        //     <img class="card-img-top" src={tasks.url} alt="Card img" />
        //     <div class="card-body">
        //       <h4 class="card-title">{tasks.productName}</h4>
        //       <p class="card-text">Type : {tasks.productLine}</p>
        //       <p class="card-text">Scale : {tasks.productScale}</p>
        //       <p class="card-text">Vendor : {tasks.productVendor}</p>
        //       <p class="card-text">Description : {tasks.productDescription}</p>
        //       <p class="card-text">Stock : {tasks.quantityInStock}</p>
        //       <p class="card-text">Price : {tasks.buyPrice}</p>
        //       <p class="card-text">MSRP : {tasks.MSRP}</p>
        //       <a href="" class="btn btn-primary">
        //         Add to cart
        //       </a>
        //     </div>
        //   </div>
        // </div>

        <Card
            style={{ width: "25rem", margin: "30px 20px ", paddingTop: "10px" }}
          >
            <Card.Img variant="top" src={tasks.url} />
            <Card.Body>
              <Card.Title>{tasks.productName}</Card.Title>
              <Card.Text>
                <b>Type :</b> {tasks.productLine}
              </Card.Text>
              <Card.Text>
                <b>Scale :</b> {tasks.productScale}
              </Card.Text>

              <Card.Text>
                <b>Stock :</b> {tasks.quantityInStock}
              </Card.Text>
              <Card.Text>
                <b>Price :</b> {tasks.buyPrice}
              </Card.Text>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
      ));

      return <div class="row justify-content-start">{listItems}</div>;
    }
  };


  return (
    <div class="">
      <h1 className="product">
        Shop <span style={{ color: "blue" }}>Page</span>
      </h1>
      <div class="container">{render()}</div>
    </div>
    
  );
};

export default Shop;
