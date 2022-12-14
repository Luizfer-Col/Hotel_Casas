import React, { useEffect, useState } from "react";
import Style from "./Register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createClient, getClients } from "../../../redux/actions/index";
import { Link } from "react-router-dom";

const Register = (props) => {
  const dispatch = useDispatch();
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

  const [checkPassword, setCheckPassword] = useState(false)

  useEffect(() => {
    if (input.password.length > 0 && input.password === input.confirmPassword) {
      setCheckPassword(true)
    }
  }, [input])


  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log("input.password", input.password);
    console.log("input.confirmPassword", input.confirmPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("enviando formulario");
    console.log(checkPassword);
    // checkPassword !== false && console.log('holaa');
    // dispatch(createClient(input));
    // dispatch(getClients());
  }
  return (
    <div className={Style.container}>
      <div className={Style.title}>

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
      </div>
      <div className={Style.content}>
        <form onSubmit={(e) => handleSubmit(e)}
          name="Formulario de registro"
        >
          <input
            className={Style.input}
            type="text"
            name="name"
            value={input.name}
            placeholder="Nombre"
            onChange={(e) => handleChange(e)}
          />

          <input
            className={Style.input}
            type="text"
            name="lastname"
            value={input.lastname}
            placeholder="Apellidos"
            onChange={(e) => handleChange(e)}
          ></input>


          <input
            className={Style.input}
            type="text"
            name="email"
            value={input.email}
            maxLength="30"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />

          <input
            className={Style.input}
            type="password"
            name="password"
            value={input.password}
            maxLength="18"
            placeholder="Contraseña"
            onChange={(e) => handleChange(e)}
          />


          <input
            className={Style.input}
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            maxLength="18"
            placeholder="Confirmar contraseña"
            onChange={(e) => handleChange(e)}
          />

          <div className={Style.actions}>
            <Link to="/login">
              <button
                className={Style.buttons}
                style={{
                  marginRight: 2,
                  borderColor: "black",
                  borderWidth: 1,
                  fontWeight: "bolder",
                }}
              >
                Volver
              </button>
            </Link>

            <button
              type="submit"
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
            width: "100%",
            height: 2,
            // marginInline: "3%",
            // marginLeft: "10%",
            marginTop: 30,
          }}
        ></div>
        <div className={Style.link}>

          <p style={{ fontSize: 20, color: "black", fontWeight: "lighter", marginRight: 6 }}>
            ¿Ya tienes una cuenta?
          </p>
          <Link to={"/login"}>
            <p style={{ fontSize: 18, color: "#345607", fontWeight: "bolder" }}>
              Inicia sesión
            </p>
          </Link>
        </div>

      </div>
    </div >
    // <div className={Style.container}>
    //   <h2 style={{ fontSize: 50, color: "black" }}>Regístrate</h2>
    //   <p
    //     style={{
    //       fontSize: 20,
    //       marginTop: -10,
    //       color: "black",
    //       fontWeight: "lighter",
    //     }}
    //   >
    //     Por favor llena todos los campos.
    //   </p>

    //   <div className={Style.form}>
    //     <form onSubmit={(e) => handleSubmit(e)} name="Formulario de registro">
    //       <input
    //         className={Style.input}
    //         type="text"
    //         name="name"
    //         value={input.name}
    //         placeholder="Nombre"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br />

    //       <input
    //         className={Style.input}
    //         type="text"
    //         name="lastname"
    //         value={input.lastname}
    //         placeholder="Apellidos"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br />

    //       <input
    //         className={Style.input}
    //         type="text"
    //         name="email"
    //         value={input.email}
    //         maxLength="30"
    //         placeholder="Email"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br />

    //       <input
    //         className={Style.input}
    //         type="text"
    //         name="password"
    //         value={input.password}
    //         maxLength="18"
    //         placeholder="Contraseña"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br />

    //       <input
    //         className={Style.input}
    //         type="text"
    //         name="confirmPassword"
    //         value={input.confirmPassword}
    //         maxLength="18"
    //         placeholder="Confirmar contraseña"
    //         onChange={(e) => handleChange(e)}
    //       ></input>
    //       <br />

    //       <div className={Style.actions}>
    //         <Link to="/login">
    //           <button
    //             className={Style.buttons}
    //             style={{
    //               marginRight: 2,
    //               borderColor: "red",
    //               borderWidth: 1,
    //               fontWeight: "bolder",
    //             }}
    //           >
    //             Volver
    //           </button>
    //         </Link>

    //         <button
    //           type="submit"
    //           className={Style.buttons}
    //           style={{
    //             backgroundColor: "#56070C",
    //             color: "white",
    //             fontWeight: "bolder",
    //           }}
    //         >
    //           Aceptar
    //         </button>
    //       </div>
    //     </form>

    //     <div
    //       style={{
    //         backgroundColor: "black",
    //         width: "94%",
    //         height: 2,
    //         marginInline: "3%",
    //         // marginLeft: "10%",
    //         marginTop: 30,
    //       }}
    //     ></div>
    //     <p style={{ fontSize: 20, color: "black", fontWeight: "lighter" }}>
    //       ¿Ya tienes cuenta?
    //     </p>
    //     <Link to={"/login"}>
    //       <p style={{ fontSize: 18, color: "#345607", fontWeight: "bolder" }}>
    //         Inicia sesión
    //       </p>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Register;
