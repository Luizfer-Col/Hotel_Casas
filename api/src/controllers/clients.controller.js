import Clients from "../models/Clients.js";

export async function getClients(req, res) {
    try {
        const clientesObtenidos = await Clients.findAll();
        console.log(clientesObtenidos);
        if (clientesObtenidos.length > 0) {
            res.send(clientesObtenidos);
        } else {
            res.send("No hay usuarios registrados.");
        }
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function getClient(req, res) {
    try {
        const { id } = req.params;
        const client = await Clients.findOne({
            where: {
                id,
            },
        });
        if (client) {
            res.json(client);
        } else {
            res.status(404).json({
                message: "Usuario no encontrado.",
            });
        }
        console.log(client);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}
export async function getClientbyEmail(req, res) {
    try {
        const { email } = req.body;
        const client = await Clients.findOne({
            where: {
                email: email,
            },
        });
        if (client) {
            res.json(client);
        } else {
            res.status(404).json({
                message: "Usuario no encontrado.",
            });
        }
        console.log(client);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function createClient(req, res) {
    try {
        const { id, name, email, codeCountryPhone, phone, password } = req.body;
        console.log(req.body)
        const newClient = await Clients.create({
            id: makeRandomId(8),
            name,
            email,
            // codeCountryPhone,
            phone: 123456789,
            password,
        });

        res.json(newClient);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const makeRandomId = (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export async function updateClient(req, res) {
    try {
        const { id } = req.params;
        const { email, codeCountryPhone, phone } = req.body;
        const client = await Clients.findByPk(id);
        client.email = email;
        client.codeCountryPhone = codeCountryPhone;
        client.phone = phone;
        await client.save();
        res.json(client);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function deleteClient(req, res) {
    try {
        const { id } = req.params;
        await Clients.destroy({
            where: {
                id,
            },
        });
        return res.sendStatus(204)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}