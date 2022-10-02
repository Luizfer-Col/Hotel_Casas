import app from './app.js'
import sequelize from './database/database.js'
import rooms from './models/rooms.js'

const port = 3000
async function main() {
    try {
        await sequelize.sync({ force: false });
        app.listen(port)
        console.log('server is listening on port', port)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()