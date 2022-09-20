import { Router } from "express";
import { createClient, getClient } from "../controllers/clients.controller.js";
const router = Router()

router.get("/clients",getClient)
router.post("/clients",createClient)
router.put("/clients/:id")
router.delete("/clients/:id")
router.get("/clients/:id")





export default router