import { DATE } from 'sequelize';
import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";

const{INTEGER,BOOLEAN,STRING,} = DataTypes
const Summary = sequelize.define('summary',{
    id: {
        type: INTEGER, 
        primaryKey: true,
        autoincrement:true
    },
    date: {
        type: DATE
    },
    price: {
        type: INTEGER
    }
})

export default Summary