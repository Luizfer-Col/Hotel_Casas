import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";

const rooms = sequelize.define('rooms',{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    available: {
        type: DataTypes.BOOLEAN
    },
    type: {
        type: DataTypes.STRING
    },
    number: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    }
})

export default rooms