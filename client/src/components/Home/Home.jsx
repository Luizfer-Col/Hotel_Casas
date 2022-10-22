import React, { Fragment, useState, useEffect } from "react";
import Style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createClient, getClients } from "../../redux/actions/index";
import Register from "./Register/Register";
import { Link } from "react-router-dom";
import Gallery from "./Gallery/Gallery";

// Header
// Carrusel de tres imagenes
// Footer de reservaciones

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
 
  return (
    <>
      {/* <button onClick={(e) => handleGetClients()}>Cargar clientes</button> */}

      <Gallery />
    </>
  );
};

export default Home;
