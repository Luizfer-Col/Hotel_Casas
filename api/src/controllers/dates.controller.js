import unavailableDates from "../models/unavailableDates.js";


export async function createUnavailableDate(req, res) {
    try {
      const { id, roomId, date, data } = req.body;
      const newUnavailable = await unavailableDates.create({
        id,
        roomId,
        date,
        data
      });
  
      res.json(newUnavailable);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }