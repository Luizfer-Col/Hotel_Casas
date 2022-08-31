import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";

const{INTEGER,BOOLEAN,STRING,} = DataTypes
const clients = sequelize.define('clients',{
    id: {
        type: STRING, 
        primaryKey: true,
        
    },
    name: {
        type: STRING
    },
    email: {
        type: STRING
    },
    codeCountryPhone: {
        type: STRING
    },
    phone: {
        type: INTEGER
    },
    password: {
        type: STRING
    }
})

export default clients