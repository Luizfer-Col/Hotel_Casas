import Hosting from "../models/Hosting.js";

// not upddate

export async function createHosting(req, res) {
    try {
        const { roomId, date, data } = req.body;
        const newHosting = await Hosting.create({
            roomId,
            date,
            data
        });

        res.json(newHosting);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}