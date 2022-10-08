import React, { Fragment, useState, useEffect } from "react";
import Style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createClient, getClients } from "../../redux/actions/index";

const Home = () => {
  const dispatch = useDispatch();
  // useEffect(() => {

  // }, [])
  const allClients = useSelector((state) => state.clients);
  function handleGetClients(e) {
    // e.preventDefault();
    dispatch(getClients());
  }
  console.log("All clients", allClients);
  const [input, setInput] = useState({
      name: "",
      id: "",
      email: "",
      codeCountryPhone: "",
      phone: "",
      password: "",
  })
// const [name,setName] = useState("")

// console.log ("input", input)

function handleChange (e) {
  e.preventDefault();
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  console.log ("input.name", input)
}

function handleSubmit (e) {
  e.preventDefault();
  dispatch(createClient(input));
  dispatch(getClients());
}
  return (
    <>
      <div className={Style.title}>Hotel Casas</div>
          <button onClick={(e) => handleGetClients()}>Cargar clientes</button>

      <div>
        {/* Prueba formulario */}

        <form onSubmit={(e)=>handleSubmit(e)} name="Formulario de registro">
          
          <div>
            <h3 className={Style.title}>Formulario de registro</h3>
          </div>

          <input
            type="text"
            name="name"
            value={input.name}
            maxLength="30"
            placeholder="Nombre completo"
            onChange={(e)=>(handleChange(e))}
          ></input>
          <br />

          <input
            type="text"
            name="id"
            value={input.id}
            maxLength="10"
            placeholder="D.I"
            onChange={(e)=>(handleChange(e))}
          ></input>
          <br />

          <input
            type="text"
            name="email"
            value={input.email}
            maxLength="30"
            placeholder="Correo electrónico"
            onChange={(e)=>(handleChange(e))}
          ></input>
          <br />

          <input
            type="text"
            name="codeCountryPhone"
            value={input.codeCountryPhone}
            maxLength="10"
            placeholder="Código de área"
            onChange={(e)=>(handleChange(e))}
          ></input>
          <br />

          <input
            type="text"
            name="phone"
            value={input.phone}
            maxLength="10"
            placeholder="Teléfono"
            onChange={(e)=>(handleChange(e))}
          ></input>
          <br />

          <input
            type="text"
            name="password"
            value={input.password}
            maxLength="18"
            placeholder="Contraseña"
            onChange={(e)=>(handleChange(e))}
          ></input>
          <br />

        <button type="submit">Aceptar</button>
        </form>

      </div>
    </>
  );
};

export default Home;
