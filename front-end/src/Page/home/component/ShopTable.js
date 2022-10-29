import { useEffect, useState } from "react";
import "./ShopTable.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ShopTable = () => {
  const [products, setProducts] = useState([]);
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

  const handleMouseMove = (IDProduct) => {
    // console.log(IDProduct);
    localStorage.setItem("IDProduct", IDProduct);
    // window.location.href = "/product";
  };

  const render = () => {
    if (check)
      return (
        <div>
          <h1 className="headerText"> Bad Connection </h1>
        </div>
      );
    else {
      // console.log(1);
      const listItems = products.map((tasks) => {
        return (
          <Card
            style={{ width: "25rem", margin: "30px 20px ", paddingTop: "10px" }}
            onMouseMove={() => handleMouseMove(tasks.productCode)}
            className="d-flex flex-column justify-content-between"
          >
            <div>
              <Card.Img
                variant="top"
                src={tasks.url}
                onClick={() => handleClick(tasks.productCode)}
                type="submit"
              />
            </div>

            <div>
              <Card.Body>
                <div onClick={() => handleClick(tasks.productCode)} type="submit">
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
                </div>

                <div>
                  <Link to="/product">
                    <Button variant="warning" style={{ marginTop: "10px" }}>
                      more info
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/471/471662.png "
                        width="20"
                        height="20"
                        alt=""
                        title=""
                        class="img-small"
                        style={{ marginLeft: "9px" }}
                      ></img>
                    </Button>
                  </Link>
                  <Button
                    variant="primary"
                    style={{ marginTop: "10px", float: "right"}}
                    disabled={disabled}
                    onClick={handleClick}
                  >
                    Add Product
                  </Button>
                </div>
              </Card.Body>
            </div>

          </Card>
        );
      });

      return <div class="row justify-content-start">{listItems}</div>;
    }
  };

  return (
    <div style={{ fontFamily: "JetBrains Mono" }} className="" onMouseMove={checkToken}>
      <h1 className="product">
        Shop Today.
      </h1>
      <div class="container">{render()}</div>
    </div>
  );
};

export default ShopTable;
