import { useEffect, useState } from "react";
import "./ShopTable.css";

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
  }

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
          <div class="col-4" style={{ padding: "20px" }}>
            <div class="" className="size">
              <img class="card-img-top" src={tasks.url} alt="Card img" onClick={() => handleClick(tasks.productCode)} />
              <div class="card-body">
                <h4 class="card-title">{tasks.productName}</h4>
                <p class="card-text">{tasks.productDescription}</p>
                <a href="" class="btn btn-primary">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        )
      });

      return <div class="row justify-content-start">{listItems}</div>;
    }
  };

  return (
    <div class="">
      <h1 className="product" onClick={handleClick('name')}>
        Shop <span style={{ color: "white" }}>Today</span>
      </h1>
      <div class="container">{render()}</div>
    </div>
  );
};

export default ShopTable;
