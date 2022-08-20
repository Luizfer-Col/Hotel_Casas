import Sequelize from 'sequelize'
//Conectando sequelize
const sequelize = new Sequelize(
    'hotelcasas','postgres','AndresCasas19',
    {
        host: 'localhost',
        dialect: 'postgres'

        

})

export default sequelize
