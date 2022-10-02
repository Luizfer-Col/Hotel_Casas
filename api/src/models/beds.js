import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";

const{INTEGER,BOOLEAN,STRING,} = DataTypes
const Beds = sequelize.define('beds',{
    id: {
        type: INTEGER, 
        primaryKey: true,
        autoincrement: true
    },
    name: {
        type: STRING
    },
    description: {
        type: STRING
    }

})

export default Beds