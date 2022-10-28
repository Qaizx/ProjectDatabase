import { useState } from "react";

const Money = () => {
  const CryptoJS = require("crypto-js");
  const token = localStorage.getItem("token");
  const username = CryptoJS.enc.Base64.parse(token).toString(CryptoJS.enc.Utf8);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const pushInfo = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IlJLZzhwZy82NkVDTVBmbHFLZFFRK0E9PSIsInZhbHVlIjoiQTUyMnl2bURaamw4MWx2R1prWTRYRFVTTkxPZDhtNFRVcDNqUlBYajd3Vk5zeVducDVGdERETUdLU1VMYlFBM2dXV2NIeEVaZU16NDNTMGg3eGltVzIwRGxkSVpSeW9kNCtaQmpLK1RnYnN4R2lIZGphOHZvcDhBdXZ1dGhQRW8iLCJtYWMiOiJlNjQyNTFiYjRmODc3ZmYwNDcxZmIxNDcyNmE0NjRhZWVhYmFjYzEwODMzMDM3ZjQwZjRmYmE1ZTVkODM5MTIyIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IkVJUHJLWC9nL0ovdmcyVWtwWGhFR3c9PSIsInZhbHVlIjoiUmRlUVBaakxReXltdzRxODNtTVliN25mV2hKeFBlZ2RtQWg2SHptd1hFLzlxb0xDU0dQRzJRT05PeDJDd3VsY1VlTXMwYUp6WDBoTEFzd3p2WGNxV2tyVEMvbytIMFN5UGNqTVN4SHJMb09uNVM4djlaQ0xCK0RTK0JmLzZFd24iLCJtYWMiOiJkZDg4NzQzNDAzOTIyYjgwZDNlMzRmMzJhZWU3NTFjNzQwZWU0NDk5ZDY4MDNkMWU1N2FiYWNmMjIxNGU0ZGE0IiwidGFnIjoiIn0%3D"
    );

    var raw = JSON.stringify({
      username: username,
      creditLimit: inputs.money,
    });

    var requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/api/updateProfile", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("credit", inputs.money);
        window.location.href = "/profile";
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Hack Money</h1>
        <input
          placeholder="get money"
          name="money"
          value={inputs.money || ""}
          onChange={handleChange}
        ></input>
        <button onClick={pushInfo}>get</button>
      </div>
    </>
  );
};

export default Money;
