import React from "react";
import Style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ active, setActive, login }) => {
  const inicio = active === "inicio";
  const habitaciones = active === "habitaciones";
  const reservaciones = active === "reservaciones";
  return (
    <div className={Style.containerMenu}>
      <Link to="/">
        <button
          onClick={() => setActive("inicio")}
          className={Style.buttonNav}
          style={{
            color: inicio ? "white" : "black",
            backgroundColor: inicio ? "#75685E" : "white",
            fontWeight: inicio ? "bolder" : "normal",
          }}
        >
          Inicio
        </button>
      </Link>
      <Link to="/rooms">
        <button
          onClick={() => setActive("habitaciones")}
          className={Style.buttonNav}
          style={{
            color: habitaciones ? "white" : "black",
            backgroundColor: habitaciones ? "#75685E" : "white",
            fontWeight: habitaciones ? "bolder" : "normal",
          }}
        >
          Habitaciones
        </button>
      </Link>
      <Link to="/bar">
        <button
          onClick={() => {
            login();
            setActive("reservaciones");
          }}
          className={Style.buttonNav}
          style={{
            color: reservaciones ? "white" : "black",
            backgroundColor: reservaciones ? "#75685E" : "white",
            fontWeight: reservaciones ? "bolder" : "normal",
          }}
        >
          Reservaciones
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
