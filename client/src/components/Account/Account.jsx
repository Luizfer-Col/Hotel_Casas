import React, { useState } from "react";
import Style from "./Account.module.css";
import Avatar from "../../assets/img/Icons/Avatar.png";
import { Link } from "react-router-dom";
import DataAccount from "./DataAccount";
import Password from "./Password";
import MyReservations from "../Reserve/MyReservations";
import Host from "../Reserve/Host";

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
  const [screenActive, setScreenActive] = useState('dataAccount')

  const idTypes = ["CC", "NIT", "CE", "TI", "PP", "DNI"];

  const [updateData, setUpdateData] = useState(true)

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log("input.name", input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createClient(input));
    dispatch(getClients());
  }
  const handleLink = (view) => {
    setScreenActive(view)

  }
  const SideLink = (props) => {
    return (
      <Link onClick={handleLink(props.screen)}>
        <p>{props.title}</p>
      </Link>
    )
  }
  return (
    <div className={Style.container}>

      <div
        className={Style.containerLeft}
      // style={{ backgroundColor: "red", flex: 1 }}
      >
        <div className={Style.contentLeft}>
          <h2 style={{ fontSize: 26 }}>MI CUENTA</h2>
          <div
            // style={{}}
            className={Style.containerAvatar}
          >
            <img width="120px" src={Avatar} alt="" style={{ marginBottom: 20 }} />
            <h3>Luis Colorado</h3>
            <p>Administrador</p>
          </div>
          <div
            className={Style.actions}
            style={{ marginTop: 30, fontSize: 16, color: 'red' }}>
            <h2 style={{ fontSize: 16 }}> CUENTA </h2>

            <Link onClick={() => handleLink('dataAccount')}>
              <p>Datos</p>
            </Link>
            <Link onClick={() => handleLink('password')}>
              <p>Contraseña</p>
            </Link>

            <h2 style={{ fontSize: 16 }}>SERVICIOS </h2>
            <Link onClick={() => handleLink('reservation')}>
              <p>Reservaciones</p>
            </Link>
            <Link onClick={() => handleLink('estadia')}>
              <p>Estadía</p>
            </Link>

            <h2 style={{ fontSize: 16 }}> ADMIN </h2>
            <Link onClick={() => console.log("inicio")}>
              <p>Habitaciones</p>
            </Link>
            <Link onClick={() => console.log("inicio")}>
              <p>Reservaciones</p>
            </Link>
            <Link onClick={() => console.log("inicio")}>
              <p>Estadías</p>
            </Link>
          </div>
        </div>
      </div>



      <div className={Style.containerRight}>
        {screenActive === 'dataAccount' &&
          <DataAccount updateData={updateData} setUpdateData={setUpdateData} />
        }
        {screenActive === 'password' &&
          <Password />
        }

        {screenActive === 'reservation' &&
          <MyReservations />
        }
        {screenActive === 'estadia' &&
          <Host />
        }

      </div>

    </div>
  );
};
export default Account;
