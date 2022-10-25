import React, { useState } from "react";
import Style from "./Account.module.css";

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
      Account
      <div style={{ backgroundColor: "blue" }}>
        <h3>Nombre</h3>
      </div>
      <div style={{ backgroundColor: "red" }}>
        <p>Información personal</p>

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
          placeholder="Correo electrónico"
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
      </div>
    </div>
  );
};
export default Account;
