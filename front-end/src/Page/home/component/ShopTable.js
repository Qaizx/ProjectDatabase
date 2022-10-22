import './ShopTable.css'


const ShopTable = () => {
  const table = () => {
    const numbers = [1, 2, 3, 4, 5, 6];

    const listItems = numbers.map((numbers) => (
      <div class="col-4" style={{padding: "20px"}}>
        <div class="" className="size">
          <img
            class="card-img-top"
            src="https://i.scdn.co/image/ab67616d00001e0260ba1d6104d0475c7555a6b2"
            alt="Card img"
          />
          <div class="card-body">
            <h4 class="card-title">Product Name</h4>
            <p class="card-text">Description {numbers}</p>
            <a href="" class="btn btn-primary">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    ));

    return <div class="row justify-content-start" >{listItems}</div>;
  };

  return (
    <div class="">
    <h1 className="product">
        Shop <span style={{ color: "white" }}>Today</span>
      </h1>
      <div class="container">{table()}</div>
    </div>
    
  );
};

export default ShopTable;
