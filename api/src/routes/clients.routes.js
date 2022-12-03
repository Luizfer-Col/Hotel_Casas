import { Router } from "express";
import {
    createClient,
    deleteClient,
    getClient,
    getClientbyEmail,
    getClients,
    updateClient,
} from "../controllers/clients.controller.js";
const router = Router();

router.get("/clients", getClients);
router.get("/clients/:id", getClient);
router.get("/clientslogin", getClientbyEmail);
router.post("/clients", createClient);
router.put("/clients/:id", updateClient);
router.delete("/clients/:id", deleteClient);

export default router;