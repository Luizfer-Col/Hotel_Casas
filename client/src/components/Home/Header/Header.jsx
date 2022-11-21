import React from "react";
import Style from "./Header.module.css";
// import Register from "../Register/Register";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/Logo.png";
import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import NavAccount from "./NavAccount/NavAccount";

// logo hotel
// botones de navegación
// opciones de usuario

const Header = () => {
  const [active, setActive] = useState("");

  const [logued, setLogued] = useState(false);

  const handleLogin = () => {
    setActive("");
    setLogued(true);
    console.log(logued);
  };

  return (
    <div
      style={{
        width: "100%",
        height: 110,
        backgroundColor: "#665A52",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={Style.containerHeader}>

      <NavBar active={active} setActive={setActive} login={handleLogin} />
      <div className={Style.logo}>
        {/* <Link to="/" onClick={() => setActive("inicio")}>
          <img width="110px" src={Logo} alt="" />
        </Link> */}
      </div>
      </div>
      {/* <div className={Style.containerHeader}>
        <div className={Style.logo}>
          <Link to="/" onClick={() => setActive("inicio")}>
            <img width="70px" src={Logo} alt="" />
          </Link>
        </div>
        <NavBar active={active} setActive={setActive} login={handleLogin} />
        <NavAccount setActive={setActive} logued={logued} logout={setLogued} />
      </div> */}
    </div>
  );
};

export default Header;
