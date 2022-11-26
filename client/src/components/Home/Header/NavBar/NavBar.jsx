import React from "react";
import Style from "./NavBar.module.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../../../../assets/img/Logo.png";
import { useEffect } from "react";

const NavBar = ({ active, setActive, login }) => {
  let location = useLocation();

  const home = location.pathname === '/'
  const rooms = location.pathname === '/rooms'
  const reserve = location.pathname === '/reserve'
  const account = location.pathname === '/account'


  return (
    <>
      <div className={Style.containerMenu}>
        <div className={Style.groupButtons}>
          <ButtonNav linkTo='/' text='INICIO' isActive={home} />
          <ButtonNav linkTo='/rooms' text='HABITACIONES' isActive={rooms} />
        </div>
        <div className={Style.containerLogo}>
          <Link>
            <img width="120px" src={Logo} alt="" />
          </Link>
        </div>
        <div className={Style.groupButtons}>
          <ButtonNav linkTo='/reserve' text='RESERVAR' isActive={reserve} />
          <ButtonNav linkTo='/account' text='CUENTA' isActive={account} />
        </div>
      </div>

    </>

  );
};

export default NavBar;

export const ButtonNav = ({ linkTo, text, isActive }) => {
  return (
    <Link to={linkTo} >
      <p className={isActive ? Style.linkActive : Style.linkInactive}>{text}</p>
    </Link>
  )
}
