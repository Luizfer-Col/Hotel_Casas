import { Router } from "express";
import { createUnavailableDate } from "../controllers/dates.controller.js";


const router = Router();

router.post("/dates", createUnavailableDate);


export default router;