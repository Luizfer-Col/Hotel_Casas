import Clients from "../models/Clients.js"


export async function getClient (req, res) {
    try {
        const clientesObtenidos = await Clients.findAll()    
        console.log(clientesObtenidos);
        if(clientesObtenidos.length>0){
            res.send(clientesObtenidos)
        }else{
            res.send("Aun no hay usuarios registrados.")
        }
    } catch (error) {
     res.status(500).json({
        message: error.message
     })   
    }
   
}


export async function createClient (req, res) {
    try {
        const {id, name, email, codeCountryPhone, phone, password} = req.body
        const newClient = await Clients.create(
            {
                id, 
                name, 
                email, 
                codeCountryPhone, 
                phone, 
                password
            }
        )
    
        res.json(newClient)
    } catch (error) {
        res.status(500).json({
            message: error.message
         })   
    }

 

}