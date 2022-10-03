import express from 'express' 
import morgan from 'morgan'
import cors from 'cors' 

const app = express();

//Importando rutas
import clientsRoutes from './routes/clients.routes.js'
import roomsRoutes from './routes/rooms.routes.js'
import hostingRoutes from './routes/hosting.routes.js'


app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


app.use(clientsRoutes)
app.use(roomsRoutes)
app.use(hostingRoutes)


export default app