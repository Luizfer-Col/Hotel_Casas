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

export async function createClient(req, res) {
  try {
    const { id, name, email, codeCountryPhone, phone, password } = req.body;
    const newClient = await Clients.create({
      id,
      name,
      email,
      codeCountryPhone,
      phone,
      password,
    });

    res.json(newClient);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
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
