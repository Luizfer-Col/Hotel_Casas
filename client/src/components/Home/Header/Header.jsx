import React from "react";
import Style from "./Header.module.css";
import Register from "../Register/Register";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../../assets/img/Logo.png'
import { useState } from "react";
// logo hotel
// botones de navegación
// opciones de usuario

const Header = () => {
  const [active, setActive] = useState('')


  return (
    <div className={Style.containerHeader}>
      <div className={Style.logo}><img width='100px' src={Logo} alt="" /></div>

      <NavBar active={active} setActive={setActive} />
      <div className={Style.containerAccount}>
        <div className={Style.buttonLogin}>
          <Link onClick={() => setActive('')}
            to="/login">Acceder</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

const NavBar = ({ active, setActive }) => {
  const inicio = active === 'inicio'
  const habitaciones = active === 'habitaciones'
  const gastrobar = active === 'gastrobar'
  return (
    <div className={Style.containerMenu}>
      <Link to="/">
        <button
          onClick={() => setActive('inicio')}
          className={Style.buttonNav}
          style={{
            color: inicio ? 'white' : 'black',
            backgroundColor: inicio ? '#75685E' : 'white',
            fontWeight: inicio ? 'bolder' : 'normal',
          }}

        >
          Inicio
        </button>
      </Link>
      <Link to="/">
        <button
          onClick={() => setActive('habitaciones')}
          className={Style.buttonNav}
          style={{
            color: habitaciones ? 'white' : 'black',
            backgroundColor: habitaciones ? '#75685E' : 'white',
            fontWeight: habitaciones ? 'bolder' : 'normal',

          }}
        >
          Habitaciones
        </button>
      </Link>
      <Link to="/">
        <button
          onClick={() => setActive('gastrobar')}
          className={Style.buttonNav}
          style={{
            color: gastrobar ? 'white' : 'black',
            backgroundColor: gastrobar ? '#75685E' : 'white',
            fontWeight: gastrobar ? 'bolder' : 'normal',

          }}
        >
          Gastrobar
        </button>
      </Link>

    </div>
  )
}