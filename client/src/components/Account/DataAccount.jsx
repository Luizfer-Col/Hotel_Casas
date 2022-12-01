import React from 'react'
import Style from './DataAccount.module.css'
import Edit from '../../assets/icons/edit.png'

const DataAccount = ({ updateData, setUpdateData }) => {
    return (
        <div className={Style.container}> <h2 className={Style.titleRight}>Información de la cuenta</h2>
            <img style={{ position: 'absolute', marginTop: -30, paddingLeft: 562, cursor: 'pointer' }} src={Edit} height={'25px'} width={'25px'} onClick={() => setUpdateData(false)} />

            <div className={Style.containerInput}>
                <p className={Style.label}>Nombre(s):</p>
                <input
                    disabled={updateData}
                    className={Style.input}
                    type="text"
                    name="name"
                    // value={input.name}
                    // placeholder="Nombre"
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className={Style.containerInput}>
                <p className={Style.label}>Apellido(s):</p>
                <input
                    disabled={updateData}
                    className={Style.input}
                    type="text"
                    name="lastname"
                    // value={input.lastname}
                    // placeholder="Apellidos"
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className={Style.containerInput}>
                <p className={Style.label}>Email:</p>
                <input
                    disabled={updateData}
                    className={Style.input}
                    type="text"
                    name="email"
                    // value={input.email}
                    maxLength="30"
                    // placeholder="Email"
                    onChange={(e) => handleChange(e)}
                />
            </div>



            <div className={Style.containerInput} style={{ marginBottom: 25 }}>
                <p className={Style.label} style={{ color: 'white' }}></p>
                <div
                    style={{
                        backgroundColor: "black",
                        width: "60%",
                        height: 1,
                        // 
                        paddingInline: 6,
                        // marginLeft: "10%",
                        marginTop: 30,
                        marginLeft: 10

                    }}
                ></div>
            </div>



            <h2 className={Style.titleRight}>Información adicional</h2>

            <div className={Style.containerInput}>
                <p className={Style.label}>Teléfono:</p>
                <select
                    disabled={updateData}
                ></select>
                <input
                    disabled={updateData}
                    className={Style.inputPhone}
                    type="text"
                    name="email"
                    // value={input.email}
                    maxLength="30"
                    // placeholder="Email"
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className={Style.containerInput}>
                <p className={Style.label}>Documento:</p>
                <select
                    disabled={updateData}
                ></select>
                <input
                    disabled={updateData}
                    className={Style.inputPhone}
                    type="text"
                    name="email"
                    // value={input.email}
                    maxLength="30"
                    // placeholder="Email"
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div className={Style.containerInput}>
                <p className={Style.label}>Nacionalidad:</p>
                <input
                    disabled={updateData}
                    className={Style.input}
                    type="text"
                    name="email"
                    // value={input.email}
                    maxLength="30"
                    // placeholder="Email"
                    onChange={(e) => handleChange(e)}
                />
            </div>
            {
                updateData
                    ?
                    (
                        null
                    ) : (
                        <div className={Style.contactions}>
                            <button
                                onClick={() => setUpdateData(true)}
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
                                onClick={() => setUpdateData(true)}

                                className={Style.buttons}
                                style={{
                                    backgroundColor: "#345607",
                                    color: "white",
                                    fontWeight: "bolder",
                                }}
                            >
                                Aceptar
                            </button>
                        </div>)
            }
        </div>
    )
}

export default DataAccount