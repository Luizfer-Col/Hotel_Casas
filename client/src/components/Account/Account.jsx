import React, { useState } from "react";
import Style from "./Account.module.css";
import Avatar from "../../assets/img/Icons/Avatar.png";
import { Link } from "react-router-dom";

const Account = (props) => {
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
    <div className={Style.container}>
      <div
        className={Style.containerLeft}
        // style={{ backgroundColor: "red", flex: 1 }}
      >
        <div
          // style={{}}
          className={Style.containerAvatar}
        >
          <img width="100px" src={Avatar} alt="" />
        </div>
        <h3>Luis Colorado</h3>
        <p>Administrador</p>
        <div style={{ marginTop: 30 }}>
          <Link onClick={() => console.log("inicio")}>
            <p>Actualizar datos</p>
          </Link>
          <Link onClick={() => console.log("inicio")}>
            <p>Actualizar contraseña</p>
          </Link>
        </div>
      </div>
      <div className={Style.containerRight}>
        <h3 className={Style.titleRight}>Información de la cuenta</h3>

        <div className={Style.containerInput}>
          <p className={Style.label}>Nombre</p>
          <input
            className={Style.input}
            type="text"
            name="name"
            value={input.name}
            // placeholder="Nombre"
            onChange={(e) => handleChange(e)}
          ></input>
          <br />
        </div>

        <div className={Style.containerInput}>
          <p className={Style.label}>Apellidos</p>
          <input
            className={Style.input}
            type="text"
            name="lastname"
            value={input.lastname}
            // placeholder="Apellidos"
            onChange={(e) => handleChange(e)}
          ></input>
          <br />
        </div>

        <div className={Style.containerInput}>
          <p className={Style.label}>Email</p>
          <input
            className={Style.input}
            type="text"
            name="email"
            value={input.email}
            maxLength="30"
            // placeholder="Email"
            onChange={(e) => handleChange(e)}
          ></input>
          <br />
        </div>

        <h3 className={Style.titleRight}>Información adicional</h3>

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
      </div>
      {/* <div style={{ backgroundColor: "red" }}>
        <p>Información de la cuenta</p>

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

        <select>
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
        <input
          className={Style.input}
          type="text"
          name="email"
          value={input.email}
          maxLength="30"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
        ></input>
        <br />
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
      </div> */}
    </div>
  );
};
export default Account;
