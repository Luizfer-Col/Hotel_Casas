import React from "react";
import Style from "./Header.module.css";
import Register from "../Register/Register";
import { Link } from "react-router-dom";

// logo hotel
// botones de navegación
// opciones de usuario

const Header = () => {
  return (
    <div className={Style.containerHeader}>
      <div className={Style.logo}>Logo</div>
      <div className={Style.containerMenu}>
        <button><Link to = "/">Inicio</Link></button>
        <button>Habitaciones</button>
        <button>Gastrobar</button>
      </div>
      <div className={Style.containerAccount}>
      <button>
        <Link to = "/register">Acceder</Link>
      </button>
      </div>
    </div>
  );
};

export default Header;
