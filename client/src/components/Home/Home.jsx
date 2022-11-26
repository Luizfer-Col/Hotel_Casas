import React, { Fragment, useState, useEffect } from "react";
import Style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createClient, getClients } from "../../redux/actions/index";
import Register from "./Register/Register";
import { Link } from "react-router-dom";
import Gallery from "./Gallery/Gallery";
import Picker from "./DatePicker/Picker";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// Header
// Carrusel de tres imagenes
// Footer de reservaciones

const Home = () => {
  const dispatch = useDispatch();
  // useEffect(() => {

  // }, [])
  // const today = new Date()
  // const tomorrow = new Date()
  // tomorrow.setDate(tomorrow.getDate() + 1)

  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null)

  const allClients = useSelector((state) => state.clients);
  function handleGetClients(e) {
    // e.preventDefault();
    dispatch(getClients());
  }
  console.log("All clients", allClients);

  return (
    <>
      {/* <button onClick={(e) => handleGetClients()}>Cargar clientes</button> */}
      {/* <div className={Style.title}>
        <h2>HOTEL CASAS HABITACIONES Y SUITES BOGOTÁ
        </h2>
        <p>Calle 40 sur Nro 20-12</p>
      </div> */}
      {/* <div>
      </div> */}
      <Gallery />
      <Picker />

      <div className={Style.title}>
        <h3>HOTEL CASAS - HABITACIONES Y SUITES BOGOTÁ
        </h3>
        <p>Calle 40 sur Nro 20-12</p>
      </div>

      {/* <text>
        Irure et sint deserunt pariatur aliqua voluptate enim eu mollit commodo. Nisi reprehenderit sunt exercitation laborum culpa ea cupidatat cillum consectetur irure culpa incididunt sit. In nostrud do ullamco consequat ullamco enim sint. Ex in exercitation do duis do occaecat nostrud commodo. Veniam dolor labore ea aliqua anim labore minim id do.

        Irure esse nostrud ea voluptate dolore magna veniam tempor aliqua consequat do aute ex labore. Do minim duis qui mollit qui amet labore adipisicing. Sint irure elit pariatur sint ad in. Nisi laboris tempor duis aliquip adipisicing elit veniam tempor. Anim adipisicing minim nulla voluptate fugiat non duis anim aute laborum non id. Qui aute excepteur amet et duis irure.

        Nostrud enim est est voluptate anim incididunt Lorem minim nisi esse mollit pariatur. Pariatur laboris ut commodo qui consequat cupidatat non id pariatur nostrud. Ut labore exercitation laboris ullamco eiusmod et amet sunt commodo enim id ut Lorem fugiat. Adipisicing ex cillum amet non minim Lorem dolor. Veniam minim id dolore magna id proident labore veniam non eiusmod laborum aliquip proident.

        Voluptate ullamco labore ullamco mollit enim aliqua ea adipisicing. Consequat ex exercitation irure commodo culpa velit deserunt sint fugiat non occaecat. Ut duis velit aliquip est dolore. Pariatur sint eiusmod nisi tempor cupidatat laborum et reprehenderit id magna commodo Lorem officia. Ipsum velit id veniam in aliquip et exercitation eiusmod consectetur quis duis.

        Aliqua excepteur qui magna elit id qui qui nisi ex aliqua sunt nostrud laboris in. Deserunt ut sunt cupidatat dolore proident amet. Adipisicing magna aliqua sit nisi in Lorem ullamco ea deserunt aliqua.

        Anim velit in sint dolor est aliquip. Veniam laborum cillum quis do enim laborum elit do eu voluptate aliqua ex. Nisi ex laboris eiusmod occaecat tempor.

        Officia sit commodo mollit occaecat irure eu. Deserunt est ea laboris cupidatat id cupidatat. Laboris consectetur cillum et amet cupidatat elit aliquip tempor incididunt qui deserunt pariatur. Nulla adipisicing sit mollit ex tempor dolore pariatur non id occaecat ipsum cillum. Eu pariatur elit non do dolor Lorem deserunt consequat consequat fugiat. Commodo sit id fugiat elit consequat ut elit.

        Nostrud reprehenderit aliquip ullamco enim culpa consequat et veniam in. Ullamco eiusmod laborum reprehenderit enim tempor in pariatur sunt quis fugiat laborum nisi. Culpa incididunt aliqua sit in velit. Quis cupidatat et veniam excepteur et irure aute velit consectetur laboris. Ea aliquip aliquip sit id veniam.

        Commodo sit officia cupidatat incididunt id deserunt laboris qui enim sunt aliqua consectetur. Voluptate reprehenderit voluptate voluptate officia minim anim anim tempor ex nisi laborum. Duis magna in occaecat est sint enim esse excepteur laboris proident nulla. Anim nostrud proident tempor duis elit cupidatat laboris tempor dolor amet. Dolore officia pariatur id reprehenderit id irure excepteur irure occaecat dolor magna in enim sint.

        Officia deserunt ad excepteur dolore sit dolor quis commodo enim. Nisi pariatur laboris ullamco proident mollit commodo. Mollit adipisicing ex consectetur do eu incididunt. Ut pariatur culpa ea ea deserunt veniam exercitation esse magna consequat. Adipisicing duis dolor ea ea incididunt laborum adipisicing adipisicing exercitation est deserunt aliquip duis.
      </text> */}
    </>
  );
};

export default Home;
