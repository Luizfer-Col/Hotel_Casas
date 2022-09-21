import express from 'express' 
import morgan from 'morgan'

const app = express();

//Importando rutas
import clientsRoutes from './routes/clients.routes.js'



app.use(morgan("dev"));
app.use(express.json());



app.use(clientsRoutes)


export default app