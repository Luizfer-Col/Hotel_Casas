import React from 'react'
import { useState } from 'react';
import Style from "./MyReservations.module.css";
import Modal from "@mui/material/Modal";
import { Box, Typography } from '@mui/material';



const MyReservations = (props) => {
    const [myRes, setMyRes] = useState([
        {
            id: '0001',
            title: 'Habitación Single 1 noche',
            description: 'Officia et et eiusmod in amet cillum qui nostrud eiusmod fugiat cillum est quis. Magna consectetur amet nulla deserunt esse ut tempor. Deserunt consequat enim anim officia. Ex ut exercitation eu eu ipsum esse.',
            in: '21/11/2022',
            out: '23/11/2022',
        },
        {
            id: '0002',
            title: 'Habitación Single 1 noche',
            description: 'Officia et et eiusmod in amet cillum qui nostrud eiusmod fugiat cillum est quis. Magna consectetur amet nulla deserunt esse ut tempor. Deserunt consequat enim anim officia. Ex ut exercitation eu eu ipsum esse.',
            in: '21/11/2022',
            out: '23/11/2022',
            total: '$350.000'
        },
        {
            id: '0003',
            title: 'Habitación Suite 2 noches',
            description: 'Officia et et eiusmod in amet cillum qui nostrud eiusmod fugiat cillum est quis. Magna consectetur amet nulla deserunt esse ut tempor. Deserunt consequat enim anim officia. Ex ut exercitation eu eu ipsum esse.',
            in: '21/11/2022',
            out: '23/11/2022',

        },
    ])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDeleteReserve = (index) => {
        setMyRes(myRes.filter((res, i) => i !== index))
    }

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4
    };

    return (
        <div>
            <h2 className={Style.titleRight}>Mis reservaciones</h2>
            {myRes.map((res, index) => {
                return (

                    <div className={Style.reserve}>

                        {console.log(res)}
                        <div style={{ display: 'flex', marginBottom: 6 }}>
                            <h3 style={{ marginRight: 10 }}>{res.id}</h3>
                            <h3>{res.title}</h3>
                        </div>
                        <p><strong>Checkin: </strong>{res.in} <strong>Checkout: </strong>{res.out} </p>
                        <p></p>
                        <p><strong>Detalles: </strong>{res.description}</p>
                        <p style={{ textAlign: 'right', fontSize: 16, cursor: 'pointer', fontWeight: 'bolder' }}
                            onClick={() => handleOpen()}
                        >CANCELAR RESERVA</p>
                    </div>
                )

            })}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <button onClick={() => handleClose()}>Cerrar</button>
                </Box>
            </Modal>
        </div>
    )
}

export default MyReservations