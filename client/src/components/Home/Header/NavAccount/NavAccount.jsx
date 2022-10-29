import React, { useState } from "react";
import Style from "./NavAccount.module.css";
import { Link } from "react-router-dom";
import userIcon from "../../../../assets/img/Icons/User.png";
import reservationsIcon from "../../../../assets/img/Icons/Reservations.png";
import exitIcon from "../../../../assets/img/Icons/Exit.png";

const NavAccount = ({ setActive, logued, logout }) => {
  //   const isLogued = true;
  //   const [logued, setLogued] = useState(false);

  const handleLogin = () => {
    setActive("");
    // setLogued(true);
    // console.log(logued);
  };
  return (
    <div className={Style.containerAccount}>
      {logued ? (
        // Si está logueado
        <div className={Style.containerLogued}>
          {/* <div> */}
          {/* </div> */}
          <div style={{ height: 20 }}>
            <Link
              className={Style.icons}
              to="/account"
              onClick={() => setActive("")}
            >
              <img width="20px" src={userIcon} alt="" />
            </Link>
            <Link
              className={Style.icons}
              to="/my-reservations"
              onClick={() => setActive("")}
            >
              <img width="20px" src={reservationsIcon} alt="" />
            </Link>
            <Link
              className={Style.icons}
              onClick={() => {
                setActive("");
                // Desloguear
                logout(false);
              }}
            >
              <img width="20px" src={exitIcon} alt="" />
            </Link>
          </div>
          <p>Luis Colorado</p>
        </div>
      ) : (
        // Si no está logueado
        <div className={Style.buttonLogin}>
          <Link onClick={handleLogin} to="/login">
            Acceder
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavAccount;
