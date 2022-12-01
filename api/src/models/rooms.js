import { DataTypes } from 'sequelize';
import sequelize from "../database/database.js";
import unavailableDates from './unavailableDates.js';

const { DATE, INTEGER, BOOLEAN, STRING, } = DataTypes
const Rooms = sequelize.define('rooms', {
    id: {
        type: INTEGER,
        primaryKey: true,
    },
    available: {
        type: BOOLEAN
    },
    type: {
        type: STRING
    },
    description: {
        type: STRING
    },
    price: {
        type: INTEGER
    }
})

//Conectando Habitaciones con Fechas
Rooms.hasMany(unavailableDates,
    {
        foreignKey: 'roomId',
        sourceKey: 'id'
    })
unavailableDates.belongsTo(Rooms,
    {
        foreignKey: 'roomId',
        targetId: 'id'
    })
export default Rooms
