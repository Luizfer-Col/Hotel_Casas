import Clients from "../models/Clients.js"


export async function getClient (req, res) {
    
    const clientesObtenidos = await Clients.findAll()    
    
    res.send(clientesObtenidos)
}


export async function createClient (req, res) {
    console.log(req.body)
    const {id, name, email, codeCountryPhone, phone, password} = req.body
    // const newClient = await Clients.create(
    //     {id, name, email, codeCountryPhone, phone, password}
    // )

    // res.send(newClient)

}


