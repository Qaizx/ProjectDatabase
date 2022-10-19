import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/home/Home";
import NavbarRegister from "./component/NavbarRegister";
import NavbarLogin from "./component/NavbarLogin";
import Login from "./Page/login/Login";
import Register from "./Page/register/Register";
import Info from "./Page/info/Info";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavbarRegister />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="info" element={<Info/>} /> */}
        </Route>

        <Route path="/log" element={<NavbarLogin />}>
          <Route index element={<Home />} />
          <Route path="info" element={<Info />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
