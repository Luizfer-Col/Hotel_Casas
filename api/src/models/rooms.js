import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";

const{INTEGER,BOOLEAN,STRING,} = DataTypes
const rooms = sequelize.define('rooms',{
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

export default rooms