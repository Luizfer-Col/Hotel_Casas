import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";

const{INTEGER,BOOLEAN,STRING,} = DataTypes
const Rooms = sequelize.define('rooms',{
    id: {
        type: STRING, 
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

export default Rooms