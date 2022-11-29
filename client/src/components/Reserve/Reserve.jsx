import React from 'react'
import Picker from '../Home/DatePicker/Picker'
import RoomCard from '../Rooms/RoomCard'
import { ReserveInfo } from '../utils/dataReserve'
import { roomsInfo } from '../utils/dataRooms'
import Offer from './Offer'
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

            {ReserveInfo.map((reserve, index) => {
                return <Offer key={index} data={reserve} />

            })}
        </div>
    )
}

export default Reserve