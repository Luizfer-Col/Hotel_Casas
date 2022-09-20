import express from 'express' 
import morgan from 'morgan'

const app = express();

//Importando rutas
import clientsRoutes from './routes/clients.routes.js'



app.use(morgan("dev"));

app.use(clientsRoutes)

app.use(express.json());

export default app