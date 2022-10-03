import React, { Fragment, useState, useEffect } from "react";
import Style from './Home.module.css'
import { useDispatch, useSelector } from "react-redux";
import {getClients} from "../../redux/actions/index"


const Home = () => {
const dispatch = useDispatch()
  // useEffect(() => {
   
  // }, [])
const allClients = useSelector((state)=>state.clients)
  function handleGetClients(e){
      // e.preventDefault();
      dispatch(getClients())
  }
  console.log("All clients",allClients);
  return (
    <>
    <div className={Style.title}>Home</div>
    <button onClick={(e)=>handleGetClients()}>Cargar clientes</button>
    {/* <form>
  <label>
    Nombre:
    <input type="text" name="name" />
  </label>
  <label>
    Tipo D.I:
    <input type="text" name="typeId" />
  </label>
  <label>
    D.I:
    <input type="text" name="id" />
  </label>
  <label>
    Correo electrónico:
    <input type="text" name="mail" />
  </label>
  <label>
    Código de área:
    <input type="text" name="codePhone" />
  </label>
  <label>
    Teléfono:
    <input type="text" name="phone" />
  </label>
  <input type="submit" value="Submit" />
</form> */}
    </>
  )
}

export default Home