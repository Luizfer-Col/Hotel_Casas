import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";

const{INTEGER,BOOLEAN,STRING,} = DataTypes
const clients = sequelize.define('clients',{
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
    number: {
        type: INTEGER
    },
    description: {
        type: STRING
    },
    price: {
        type: INTEGER
    }
})

export default clients