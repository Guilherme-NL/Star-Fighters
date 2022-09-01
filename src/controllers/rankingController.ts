import { Response, Request } from "express";
import { getAllFighters } from "../repositories/getfighters.js";

export default function ranking(req: Request, res: Response) {
  try {
    const results = getAllFighters();
    res.send(results).status(200);
  } catch {
    res.sendStatus(500);
  }
}
