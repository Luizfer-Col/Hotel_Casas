import React from 'react'
import Style from './Rooms.module.css'
import { roomsInfo } from '../utils/dataRooms'
import RoomCard from './RoomCard'

const Rooms = () => {
    return (
        <div className='container'>
            <div className={Style.title}>
                <p className={Style.ptitle}>
                    NUESTRAS HABITACIONES
                </p>
                <p className={Style.titlep}>
                    Cil lum anim laborum est ipsum qui labore est mollit ad anim. Consequat officia sit eiusmod deserunt fugiat aliqua sint do pariatur. .
                </p>
            </div>
            {roomsInfo.map((room, index) => {
                return <RoomCard key={index} data={room} />

            })}
        </div>
    )
}

export default Rooms