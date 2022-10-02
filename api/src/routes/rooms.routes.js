import { Router } from "express";
import {
  getRooms,
  getRoom,
  getRoomsByType,
  createRoom,
  updateRoom,
  deleteRoom,
} from "../controllers/rooms.controller.js";

const router = Router();

router.get("/rooms", getRooms);
router.get("/rooms/:id", getRoom);
// router.get("/rooms/type", getRoomsByType);
router.post("/rooms", createRoom);
router.put("/rooms/:id", updateRoom);
router.delete("/rooms/:id", deleteRoom);

export default router;