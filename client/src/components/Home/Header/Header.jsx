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
    <div className={Style.containerMain}>
      <div className={Style.headerTop}>
        <div>{null}</div>
        <div>
          <Link to='/login'>Acceder</Link>
        </div>
      </div>
      <div className={Style.containerHeader}>
        <NavBar active={active} setActive={setActive} login={handleLogin} />
      </div>
    </div>
  );
};

export default Header;
