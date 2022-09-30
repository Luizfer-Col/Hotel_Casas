import Rooms from "../models/Rooms.js";

export async function getRooms(req, res) {
    try {
      const rooms = await Rooms.findAll();
      console.log(rooms);
      if (rooms.length > 0) {
        res.send(rooms);
      } else {
        res.send("No hay habitaciones existentes.");
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export async function createRoom(req, res) {
    try {
      const { id, number, available, type, capacity, toilets, price, description, wifi, air, tub, tv, balcony } = req.body;
      const newRoom = await Rooms.create({
        id,
        number,
        available,
        type,
        capacity,
        toilets,
        price,
        description,
        wifi,
        air,
        tub,
        tv,
        balcony

      });
  
      res.json(newRoom);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export async function updateRoom(req, res) {
    try {
      const { id } = req.params;
      const { em, codeCountryPhone, phone } = req.body;
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