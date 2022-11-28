import React from 'react'
import Picker from '../Home/DatePicker/Picker'
import RoomCard from '../Rooms/RoomCard'
import { roomsInfo } from '../utils/dataRooms'
import Style from './Reserve.module.css'
const Reserve = () => {
    return (
        <div>
            <div className={Style.titleContainer}>
                <Picker />
            </div>
            <p
                className={Style.title}
            >Estas son nuestras ofertas disponibles de acuerdo a tu búsqueda</p>

            {roomsInfo.map((room, index) => {
                return <RoomCard key={index} data={room} />

            })}
        </div>
    )
}

export default Reserve