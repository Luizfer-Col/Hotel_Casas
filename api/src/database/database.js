import Sequelize from 'sequelize'
// conexion y configuracion de Sequuelize
const sequelize = new Sequelize(
    'hotelcasas','postgres','AndresCasas19',
    {
        host: 'localhost',
        dialect: 'postgres'

        

})

export default sequelize