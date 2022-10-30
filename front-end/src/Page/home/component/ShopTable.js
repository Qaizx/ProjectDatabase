import { useEffect, useState } from "react";
import "./ShopTable.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ShopTable = () => {
  const [products, setProducts] = useState([]);
  const [check, setChecked] = useState(true);
  const CryptoJS = require("crypto-js");
  const token = localStorage.getItem("token");
  const [disabled, setDisabled] = useState(true);
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
            className="cardShopTable d-flex flex-column justify-content-between"
          >
            <div>
              <Card.Img
                variant="top"
                src={tasks.url}
                onClick={() => handleClick(tasks.productCode)}
                type="submit"
                style = {{maxHeight:"250px" , minHeight:"250px"}}
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

                <div className="d-flex justify-content-between align-items-center">
                  <Link to="/product">
                    <Button className = "btn d-flex align-items-center" style={{ marginTop: "10px" ,color:"black" }}>
                      More info
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
                    className ="btn"
                    disabled={disabled}
                    onClick={handleClick}
                    style={{ color:"black" }}
                  >
                    Buy
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
    <div style={{ fontFamily: "JetBrains Mono" }} onMouseMove={checkToken}>
      <h1 className="product">
        Shop Today.
      </h1>
      <div class="container">{render()}</div>
    </div>
  );
};

export default ShopTable;
