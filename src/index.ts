import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import battle from "./routes/battleRouter.js";
import ranking from "./routes/rankingRouter.js";

dotenv.config();

const app = express();
app.use(cors(), express.json(), battle, ranking);

const PORT = process.env.PORT;
app.listen(PORT);
