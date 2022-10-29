import "./Home.css";
import ShopTable from "./component/ShopTable";

const Home = () => {
  return (
    <>
      <div className="d-flex flex-column" style={{marginLeft:"2%"}}>
        <h1 class="welcomeText" id="head">
          Every purchase <br></br> will be made <br></br>  with pleasure.
        </h1>
        <div>
          <button class="button-59" type="submit" >
            <span>
              <a href="/shop" style={{ color: "black" }}>
                Get Started{" "}
              </a>
              <svg
                stroke="black"
                fill="black"
                stroke-width="0"
                viewBox="0 0 448 512"
                class="react-icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
              </svg>
            </span>
          </button>

          <button class="button-59">
            <a href="#down" style={{ color: "black" }}>
              Product Today
            </a>
          </button>
        </div>

      </div>


      <div id="down">
        <ShopTable />
      </div>


    </>
  );
};

export default Home;
