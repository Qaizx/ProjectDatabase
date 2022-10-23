import { useEffect, useState } from "react";
import "./ShopTable.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShopTable = () => {
  const [products, setProducts] = useState([]);
  const [check, setChecked] = useState(true);

  const initProducts = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch("http://127.0.0.1:8000/api/randomproduct", requestOptions)
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

  const handleClick = (IDProduct) => {
    console.log(IDProduct);
    localStorage.setItem("IDProduct", IDProduct);
    window.location.href = "/product";
  };

  const render = () => {
    if (check)
      return (
        <div>
          <h1 className="headerText"> User Information</h1>
        </div>
      );
    else {
      // console.log(1);
      const listItems = products.map((tasks) => {
        return (
         
          <Card
            style={{ width: "25rem", margin: "30px 20px ", paddingTop: "10px" }}
            onClick={() => handleClick(tasks.productCode)}
            type="submit"
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

              <Button variant="primary" href="/">Go somewhere</Button>
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
