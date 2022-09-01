//Comentario para prueba de seguridad 4
import app from './app.js'
import sequelize from './database/database.js'
import clients from './models/clients.js'
import rooms from './models/rooms.js'
import beds from './models/beds.js'
import reservations from './models/reservations.js'
import hosting from './models/hosting.js'


const port = 3000
async function main() {
    try {
        await sequelize.sync({ force: true });
        app.listen(port)
        console.log('server is listening on port', port)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()