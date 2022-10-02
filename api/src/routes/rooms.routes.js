import { Router } from "express";
import { createRoom, getRooms } from "../controllers/rooms.controller.js";


const router = Router();


router.get("/rooms", getRooms);
router.post("/rooms", createRoom);


export default router;