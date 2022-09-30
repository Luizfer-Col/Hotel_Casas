import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";

const{INTEGER,BOOLEAN,STRING,} = DataTypes
const Rooms = sequelize.define('rooms',{
    id: {
        type: STRING, 
        primaryKey: true,
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

export default Rooms