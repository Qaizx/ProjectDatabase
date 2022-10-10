import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./web/home/Home";
import NavbarRegister from "./component/NavbarRegister";
import NavbarLogin from "./component/NavbarLogin";
import Login from "./web/login/Login";
import Register from "./web/register/Register";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<NavbarRegister />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
