import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";

const{INTEGER,BOOLEAN,STRING,DATE} = DataTypes
const hosting = sequelize.define('hosting',{
    id: {
        type: INTEGER, 
        primaryKey: true,
        autoincrement: true
    },
    CheckIn: {
        type: DATE
    },
    CheckOut: {
        type: DATE
    },
    roomServices: {
        type: STRING
    },
    extraServices: {
        type: STRING
    }
})

export default hosting