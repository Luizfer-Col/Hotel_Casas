import Rooms from "../models/Rooms.js";

export async function getRooms(req, res) {
    const { type } = req.body
    try {
      const rooms = await Rooms.findAll();
      console.log(rooms);
      if (rooms.length > 0) {
        console.log("rooms",rooms);
        if (type){
          console.log("type");
        }
        res.json(rooms);
      } else {
        res.send("No hay habitaciones existentes.");
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export async function getRoom(req, res) {
    try {
      const { id } = req.params;
      const room = await Rooms.findOne({
        where: {
          id,
        },
      });
      if (room) {
        res.json(room);
      } else {
        res.status(404).json({
          message: "Habitación no encontrada.",
        });
      }
      console.log(room);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  // export async function getRoomsByType(req, res) {
  //   try {
  //     const { type } = req.body;
  //     const rooms = await Rooms.findAll({
  //       where: {
  //         type: "Doble",
  //       },
  //     });
  //     if (rooms) {
  //       res.json(rooms);
  //     } else {
  //       res.status(404).json({
  //         message: "Tipo de habitación no encontrada.",
  //       });
  //     }
  //     console.log(rooms);
  //   } catch (error) {
  //     res.status(500).json({
  //       message: error.message,
  //     });
  //   }
  // }

  export async function createRoom(req, res) {
    try {
      const { id, image, number, available, type, capacity, toilets, price, description, wifi, air, tub, tv, balcony } = req.body;
      const newRoom = await Rooms.create({
        id,
        image,
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
      const { image, available, type, capacity, toilets, price, description, wifi, air, tub, tv, balcony } = req.body;
      const room = await Rooms.findByPk(id);
      room.image = image;
      room.available = available;
      room.type = type;
      room.capacity = capacity;
      room.toilets = toilets;
      room.price = price;
      room.description = description;
      room.wifi = wifi;
      room.air = air;
      room.tub = tub;
      room.tv = tv;
      room.balcony = balcony;
      await room.save();
      res.json(room);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export async function deleteRoom(req, res) {
    try {
      const { id } = req.params;
      await Rooms.destroy({
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