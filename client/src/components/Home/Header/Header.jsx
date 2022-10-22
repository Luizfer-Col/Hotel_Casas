import React from "react";
import Style from "./Header.module.css";
import Register from "../Register/Register";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../../assets/img/Logo.png'
// logo hotel
// botones de navegación
// opciones de usuario

const Header = () => {
  return (
    <div className={Style.containerHeader}>
      <div className={Style.logo}><img width='100px' src={Logo} alt="" /></div>

      <NavBar />
      <div className={Style.containerAccount}>
      <div className={Style.buttonLogin}>
        <Link to = "/login">Acceder</Link>
      </div>
      </div>
    </div>
  );
};

export default Header;

const NavBar = () => {

  return(
        <div className={Style.containerMenu}>
        <Link to = "/"><button className={Style.buttonNav}>Inicio</button></Link>
        <button className={Style.buttonNav}>Habitaciones</button>
        <button className={Style.buttonNav}>Gastrobar</button>
      </div> 
    // <div>
    //   <ul className={Style.navBar}>
    //     <li><NavLink to = "/" className={Style.NavBarLink}>Inicio</NavLink></li>
    //     <li><NavLink>Habitaciones</NavLink></li>
    //     <li><NavLink>Gastrobar</NavLink></li>
    //   </ul>
    // </div>
  )
}