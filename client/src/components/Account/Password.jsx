import React from 'react'
import Style from './Password.module.css'

const Password = (props) => {
    return (
        <div> <h2 className={Style.titleRight}>Cambiar contraseña</h2>

            <div className={Style.containerInput}>
                <p className={Style.label}>Anterior:</p>
                <input
                    // disabled={updateData}
                    className={Style.input}
                    type="password"
                    name="name"
                    // value={input.name}
                    // placeholder="Nombre"
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className={Style.containerInput}>
                <p className={Style.label}>Nueva:</p>
                <input
                    // disabled={updateData}
                    className={Style.input}
                    type="password"
                    name="lastname"
                    // value={input.lastname}
                    // placeholder="Apellidos"
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className={Style.containerInput}>
                <p className={Style.label}>Repetir:</p>
                <input
                    // disabled={updateData}
                    className={Style.input}
                    type="password"
                    name="email"
                    // value={input.email}
                    maxLength="30"
                    // placeholder="Email"
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <p className={Style.passAd}>La contraseña debe contener mínimo 8 caracteres, una mayúscula, una minúscula y un número</p>
            <div className={Style.contactions}>
                <button
                    // onClick={() => setUpdateData(true)}
                    className={Style.buttons}
                    style={{
                        marginRight: "2",
                        borderColor: "black",
                        borderWidth: "1",
                        fontWeight: "bolder",
                    }}
                >
                    Cancelar
                </button>
                <button
                    // onClick={() => setUpdateData(true)}

                    className={Style.buttons}
                    style={{
                        backgroundColor: "#345607",
                        color: "white",
                        fontWeight: "bolder",
                    }}
                >
                    Aceptar
                </button>
            </div>
        </div>
    )
}

export default Password