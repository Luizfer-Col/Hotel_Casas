import {DataTypes} from 'sequelize';
import sequelize from "../database/database.js";
import Hosting from './Hosting.js';
import Reservations from './Reservations.js';

const{INTEGER,BOOLEAN,STRING,} = DataTypes
const Clients = sequelize.define('clients',{
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

//Conectando Clientes con Reservations
Clients.hasMany(Reservations,
    {
foreignKey: 'clientId',
sourceKey: 'id'
})
Reservations.belongsTo(Clients,
    {
foreignKey: 'clientId',
targetId: 'id'
})


//Conectando Clients con Hosting
Clients.hasMany(Hosting,
    {
foreignKey: 'clientId',
sourceKey: 'id'
})
Hosting.belongsTo(Clients,
    {
foreignKey: 'clientId',
targetId: 'id'
})

export default Clients