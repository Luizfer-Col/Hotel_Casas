import React from "react";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
import Style from "./Login.module.css";

const Login = () => {
  return (
    <div className={Style.container}>
      <div className={Style.title}>
        <h2 style={{ fontSize: 50, color: "black" }}>Accede</h2>
        <p
          style={{
            fontSize: 20,
            marginTop: -10,
            color: "black",
            fontWeight: "lighter",
          }}
        >
          Por favor inicia sesión para empezar a reservar.
        </p>
      </div>
      <div className={Style.content}>
        <form>
          <input
            className={Style.input}
            type="text"
            name="email"
            // value={input.mai}
            // maxLength="10"
            placeholder="Ingresa tu email"
          // onChange={(e) => handleChange(e)}
          />
          <input
            className={Style.input}
            style={{}}
            type="password"
            name="password"
            // value={input.password}
            // maxLength="18"
            placeholder="Ingresa tu contraseña"
          // onChange={(e) => handleChange(e)}
          />
          <Link>
            <p className={Style.recover}>¿Olvidaste tu contraseña?</p>
          </Link>
          <div className={Style.actions}>
            <button
              className={Style.buttons}
              style={{
                marginRight: "2",
                borderColor: "black",
                borderWidth: "1",
                fontWeight: "bolder",
              }}
            >
              Volver
            </button>
            <button
              className={Style.buttons}
              style={{
                backgroundColor: "#345607",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: 2,
            // marginInline: "3%",
            // marginLeft: "10%",
            marginTop: 30,
          }}
        ></div>
      </div >
      <div className={Style.link}>

        <p style={{ fontSize: 20, color: "black", fontWeight: "lighter", marginRight: 6 }}>
          ¿No tienes una cuenta?
        </p>
        <Link to={"/register"}>
          <p style={{ fontSize: 18, color: "#56070C", fontWeight: "bolder" }}>
            Regístrate
          </p>
        </Link>
      </div>
    </div >
  );
};

export default Login;
