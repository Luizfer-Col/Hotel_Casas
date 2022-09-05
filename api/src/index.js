import app from './app.js'
import sequelize from './database/database.js'
import Clients from './models/Clients.js'
import Rooms from './models/Rooms.js'
import Beds from './models/Beds.js'
import Reservations from './models/Reservations.js'
import Hosting from './models/Hosting.js'
import Summary from './models/Summary.js'

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