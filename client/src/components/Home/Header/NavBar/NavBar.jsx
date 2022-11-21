import React from "react";
import Style from "./NavBar.module.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../../../assets/img/Logo.png";

const NavBar = ({ active, setActive, login }) => {
  const inicio = active === "inicio";
  const habitaciones = active === "habitaciones";
  const reservar = active === "reservar";
  const cuenta = active === "cuenta"

  return (
    <>
      <div className={Style.containerMenu}>
        <div className={Style.groupButtons}>
          <ButtonNav route='/' text='INICIO' isActive={inicio} setActive={setActive} />
          <ButtonNav route='/rooms' text='HABITACIONES' isActive={habitaciones} setActive={setActive} />
        </div>
        <div className={Style.containerLogo}>
          <Link
            className={(navData) => (navData.isActive ? Style.linkActive : Style.linkInactive)}
            to="/" onClick={() => setActive("inicio")}>
            <img width="120px" src={Logo} alt="" />
          </Link>
        </div>
        <div className={Style.groupButtons}>
          <ButtonNav route='/reserve' text='RESERVAR' isActive={reservar} setActive={setActive} />
          <ButtonNav route='/account' text='CUENTA' isActive={cuenta} setActive={setActive} />
        </div>
      </div>

    </>

  );
};

export default NavBar;

const ButtonNav = ({ route, text, isActive, setActive, active }) => {
  return (
    <Link to={route} onClick={() => setActive(text.toLowerCase())}>
      <a className={isActive ? Style.linkActive : Style.linkInactive}>{text}</a>
    </Link>
  )
}
