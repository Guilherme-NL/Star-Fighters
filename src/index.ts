import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import battle from "./routes/battleRouter.js";

dotenv.config();

const app = express();
app.use(cors(), express.json(), battle);

const PORT = process.env.PORT;
app.listen(PORT);
