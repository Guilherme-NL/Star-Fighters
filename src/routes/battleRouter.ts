import { Router } from "express";
import battle from "../controllers/battleController.js";

const router = Router();

router.post("/battle", battle);

export default router;
