import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";
import Rooms from './Rooms.js';

const{INTEGER,BOOLEAN,STRING,DATE} = DataTypes
const Reservations = sequelize.define('reservations',{
    id: {
        type: INTEGER, 
        primaryKey: true,
        autoincrement: true
    },
    dateCheckIn: {
        type: DATE
    },
    dateCheckOut: {
        type: DATE
    },
    numberGuests: {
        type: INTEGER
    },
    numberRooms: {
        type: INTEGER
    },
    price: {
        type: INTEGER
    }
})

//Conectando Reservations con Rooms
Reservations.hasMany(Rooms,
    {
foreignKey: 'reservationId',
sourceKey: 'id'
})
Rooms.belongsTo(Reservations,
    {
foreignKey: 'reservationId',
targetId: 'id'
})

export default Reservations