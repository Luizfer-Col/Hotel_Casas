import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";
import unavailableDates from './unavailableDates.js';

const{DATE,INTEGER,BOOLEAN,STRING,} = DataTypes
const Rooms = sequelize.define('rooms',{
    id: {
        type: STRING,
        primaryKey: true,
    },
    image: {
        type: STRING
    },
    number: {
        type: INTEGER
    },
    available: {
        type: BOOLEAN
    },
    type: {
        type: STRING
    },
    capacity: {
        type: INTEGER
    },
    toilets: {
        type: INTEGER
    },
    price: {
        type: INTEGER
    },
    description: {
        type: STRING
    },
    wifi: {
        type: BOOLEAN
    },
    air: {
        type: BOOLEAN
    },
    tub: {
        type: BOOLEAN
    },
    tv: {
        type: BOOLEAN
    },
    balcony: {
        type: BOOLEAN
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