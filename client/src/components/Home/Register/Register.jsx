import React, { useState } from "react";
import Style from "./Register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createClient, getClients } from "../../../redux/actions/index";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [input, setInput] = useState({
    name: "",
    idType: "",
    id: "",
    email: "",
    codeCountryPhone: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const idTypes = ["CC", "NIT", "CE", "TI", "PP", "DNI"];

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log("input.name", input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createClient(input));
    dispatch(getClients());
  }
  return (
    // <div>
    //   <div>
    //     <h2 style={{ fontSize: 50, color: "black" }}>Regístrate</h2>
    //     <p
    //       style={{
    //         fontSize: 20,
    //         marginTop: -10,
    //         color: "black",
    //         fontWeight: "lighter",
    //       }}
    //     >
    //       Por favor llena todos los campos.
    //     </p>

    //     <form onSubmit={(e) => handleSubmit(e)} name="Formulario de registro">
    //       <input
    //         type="text"
    //         name="name"
    //         value={input.name}
    //         maxLength="30"
    //         placeholder="Nombre completo"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br />

    //       <select>
    //         <option value="" disabled selected hidden>
    //           Tipo de documento
    //         </option>
    //         {idTypes.map((t) => (
    //           <option value={t}>{t}</option>
    //         ))}
    //       </select>

    //       <input
    //         type="text"
    //         name="id"
    //         value={input.id}
    //         maxLength="10"
    //         placeholder="Documento de identificación"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br />

    //       <input
    //         type="text"
    //         name="email"
    //         value={input.email}
    //         maxLength="30"
    //         placeholder="Correo electrónico"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br />

    //       {/* <select>
    //         <option value="" disabled selected hidden>
    //           +
    //         </option>
    //         {code.map((t) => (
    //           <option value={t}>{t}</option>
    //         ))}
    //       </select> */}

    //       {/* <input
    //         type="text"
    //         name="codeCountryPhone"
    //         value={input.codeCountryPhone}
    //         maxLength="10"
    //         placeholder="Código de área"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br /> */}

    //       <input
    //         type="text"
    //         name="phone"
    //         value={input.phone}
    //         maxLength="10"
    //         placeholder="Teléfono"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br />

    //       <input
    //         type="text"
    //         name="password"
    //         value={input.password}
    //         maxLength="18"
    //         placeholder="Contraseña"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br />

    //       <button type="submit">Aceptar</button>
    //     </form>
    //   </div>
    // </div>

    <div className={Style.container}>
      <h2 style={{ fontSize: 50, color: "black" }}>Regístrate</h2>
      <p
        style={{
          fontSize: 20,
          marginTop: -10,
          color: "black",
          fontWeight: "lighter",
        }}
      >
        Por favor llena todos los campos.
      </p>

      <div className={Style.form}>
        <form onSubmit={(e) => handleSubmit(e)} name="Formulario de registro">
          <input
            className={Style.input}
            type="text"
            name="name"
            value={input.name}
            maxLength="30"
            placeholder="Nombre completo"
            onChange={(e) => handleChange(e)}
          ></input>
          <br />
          <div style={{ backgroundColor: "green", display: "flex" }}>
            <select
              className={Style.buttons}
            >
              <option value="" disabled selected hidden>
                Tipo de documento
              </option>
              {idTypes.map((t) => (
                <option value={t}>{t}</option>
              ))}
            </select>

            <input
              className={Style.input}
              type="text"
              name="id"
              value={input.id}
              maxLength="10"
              placeholder="Documento de identificación"
              onChange={(e) => handleChange(e)}
            ></input>
            <br />
          </div>

          <input
            className={Style.input}
            type="text"
            name="email"
            value={input.email}
            maxLength="30"
            placeholder="Correo electrónico"
            onChange={(e) => handleChange(e)}
          ></input>
          <br />

          {/* <select>
          <option value="" disabled selected hidden>
            +
          </option>
          {code.map((t) => (
            <option value={t}>{t}</option>
          ))}
        </select>

        <input
          type="text"
          name="codeCountryPhone"
          value={input.codeCountryPhone}
          maxLength="10"
          placeholder="Código de área"
          onChange={(e) => handleChange(e)}
        ></input>
        <br /> */}

          <input
            className={Style.input}
            type="text"
            name="phone"
            value={input.phone}
            maxLength="10"
            placeholder="Teléfono"
            onChange={(e) => handleChange(e)}
          ></input>
          <br />

          <input
            className={Style.input}
            type="text"
            name="password"
            value={input.password}
            maxLength="18"
            placeholder="Contraseña"
            onChange={(e) => handleChange(e)}
          ></input>
          <br />

          <input
            className={Style.input}
            type="text"
            name="confirmPassword"
            value={input.confirmPassword}
            maxLength="18"
            placeholder="Confirmar contraseña"
            onChange={(e) => handleChange(e)}
          ></input>
          <br />

          {/* <button type="submit">Aceptar</button> */}
          <div className={Style.actions}>
            <button
              className={Style.buttons}
              style={{
                marginRight: 2,
                borderColor: "red",
                borderWidth: 1,
                fontWeight: "bolder",
              }}
            >
              Volver
            </button>
            <button
              className={Style.buttons}
              style={{
                backgroundColor: "#56070C",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Aceptar
            </button>
          </div>
        </form>

        <div
          style={{
            backgroundColor: "black",
            width: "94%",
            height: 2,
            marginInline: "3%",
            // marginLeft: "10%",
            marginTop: 30,
          }}
        ></div>
        <p style={{ fontSize: 20, color: "black", fontWeight: "lighter" }}>
          ¿Ya tienes cuenta?
        </p>
        <Link to={"/login"}>
          <p style={{ fontSize: 18, color: "#345607", fontWeight: "bolder" }}>
            Inicia sesión
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
