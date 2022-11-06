import "./Home.css";
import ShopTable from "./component/ShopTable";
import { useState, useEffect } from "react";

const Home = () => {
  const [profile, setProfile] = useState();
  const [picture, setPicture] = useState();
  const [check, setChecked] = useState(true);
  const [checkPic, setCheckPic] = useState(true);
  const CryptoJS = require("crypto-js");

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    const username = CryptoJS.enc.Base64.parse(token).toString(
      CryptoJS.enc.Utf8
    );

    // console.log(username);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IkpBMmNPeFhCUi9XQnpsVnRUaERSU1E9PSIsInZhbHVlIjoidGdPK1c4QTZLbFBhZ1VkdXdSemVRRzFzZmdGeThTbzljajQ2RWRHSTNSU3cvazN6eDNOaStXWHZLVEN0aE03VklMdno2YzBEZzdqYmwvUjltUmRVdFZmOGppTDZORU1KakdQcDVvMkttRm9XRkhnVStnMkFpZzJpSjAzSGl5USsiLCJtYWMiOiJmY2U4ZTA5N2Q2ZjdhMjExODY0OGVlZjQxOWViY2FiMTY3MzliYmUxZmFlNDJkZmFhNWY0NWUzODkxNDJhODI0IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IllBL041QzhkMnp2QnhPazhWU2JndUE9PSIsInZhbHVlIjoicHl0T1cvUlFhM1lHK1N1a1p3STc4T1ZhMnowTmhMV2JuTnZ0Z2ZZdFBad2lycFZXelhtZys2L1FFZWNPcEhVVmQvVHpObVlRRUh6K3VyQWlQWlR1dWNUc0t4TlhRSVZPcGV6VnN1MkNydVdaYW9KckVTVW50VFlqaGRoYmREOXIiLCJtYWMiOiJhY2MzZjVhYjZmOTRjOTMxZmY0NjQ2YTZjYzNkZDJmY2FiOTUyYjkyODNiNjIxODNiMDlkOTZiODU4YjllZjFhIiwidGFnIjoiIn0%3D"
    );

    var raw = JSON.stringify({
      username: username,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/getProfile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setProfile(result);

        setChecked(false);
      })
      .then((value) => {
        localStorage.setItem("credit", profile.creditLimit);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getProfile();
  }, []);

  const render = () => {
    if (check) {
      return (
        <>
          <div className="d-flex flex-column" style={{ marginLeft: "2%" }}>
            <h1 class="welcomeText" id="head">
              Every purchase <br></br> will be made <br></br> with{" "}
              <span class="text-animation">pleasure</span>
            </h1>
            <div>
              <button class="button-59" type="submit">
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
    } else {
      localStorage.setItem("credit", profile.creditLimit);
      return (
        <>
          <div className="d-flex flex-column" style={{ marginLeft: "2%" }}>
            <h1 class="welcomeText" id="head">
              Every purchase <br></br> will be made <br></br> with{" "}
              <span class="text-animation">pleasure</span>
            </h1>
            <div>
              <button class="button-59" type="submit">
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
    }
  };

  return (
    <>
      {render()}
    </>
  );
};

export default Home;
