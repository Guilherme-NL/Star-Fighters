import compareUser1 from "../services/battleService1.js";
import compareUser2 from "../services/battleService2.js";
import compareUsers from "../services/compareUsers.js";
import { Request, Response } from "express";

export default async function battle(req: Request, res: Response) {
  const { firstUser, secondUser } = req.body;
  console.log(req.body);
  try {
    const firstUserStars = await compareUser1(firstUser);
    const secondUserStars = await compareUser1(secondUser);

    const compare = await compareUsers(
      firstUserStars,
      secondUserStars,
      firstUser,
      secondUser
    );
    res.send(compare).status(200);
  } catch {
    res.sendStatus(500);
  }
}
