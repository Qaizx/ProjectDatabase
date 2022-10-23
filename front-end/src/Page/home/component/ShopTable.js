import { useEffect, useState } from "react";
import "./ShopTable.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShopTable = () => {
  const [products, setProducts] = useState([]);
  const [check, setChecked] = useState(true);

  const initProducts = async () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    await fetch("http://127.0.0.1:8000/api/products/random", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setChecked(false);
        setProducts(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    initProducts();
  }, []);

  const handleClick = (names) => {
    console.log(names);
  };

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
      const listItems = products.map((tasks) => {
        return (
          // <div class="col-4" className="background_product" style={{ padding: "20px" }}>
          //   <div class="" className="size">
          //     <img class="card-img-top" src={tasks.url} alt="Card img" type="submit" onClick={() => handleClick(tasks.productCode)} />
          //     <div class="card-body">
          //       <h4 class="card-title">{tasks.productName}</h4>
          //       <p class="card-text">{tasks.productDescription}</p>
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
        );
      });

      return <div class="row justify-content-start">{listItems}</div>;
    }
  };

  return (
    <div className="">
      <h1 className="product">
        Shop <span style={{ color: "blue" }}>Today</span>
      </h1>
      <div class="container">{render()}</div>
    </div>
  );
};

export default ShopTable;
