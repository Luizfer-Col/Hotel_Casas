import Reservations from "../models/Reservations.js";


export async function createReservation(req, res) {
    try {
      const { roomId, date, data } = req.body;
      const newReservation = await Reservations.create({
        roomId,
        date,
        data
      });
  
      res.json(newReservation);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }