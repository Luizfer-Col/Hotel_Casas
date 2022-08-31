import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";

const{INTEGER,BOOLEAN,STRING,DATE} = DataTypes
const reservations = sequelize.define('reservations',{
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
    numerRooms: {
        type: INTEGER
    },
    price: {
        type: INTEGER
    }
})

export default reservations