import compareUser1 from "../services/battleService1.js";
import compareUser2 from "../services/battleService2.js";
import compareUsers from "../services/compareUsers.js";
import { Request, Response } from "express";
import { chekFighter } from "../repositories/postfighters.js";
import { postNewFighters } from "../repositories/postfighters.js";
import { updateDrawFighters } from "../repositories/postfighters.js";
import { updateLoserFighters } from "../repositories/postfighters.js";
import { updateWinnerFighters } from "../repositories/postfighters.js";

export default async function battle(req: Request, res: Response) {
  const { firstUser, secondUser } = req.body;
  console.log(req.body);
  try {
    const firstUserStars = await compareUser1(firstUser);
    const secondUserStars = await compareUser2(secondUser);

    const compare = await compareUsers(
      firstUserStars,
      secondUserStars,
      firstUser,
      secondUser
    );

    await chekFighter(compare.winner);
    if (!chekFighter) {
      await postNewFighters(compare.winner, 1, 0, 0);
    }
    await updateWinnerFighters(compare.winner);

    await chekFighter(compare.loser);
    if (!chekFighter) {
      await postNewFighters(compare.loser, 0, 1, 0);
    }
    await updateLoserFighters(compare.loser);

    if (compare.winner === null) {
      await updateDrawFighters(firstUser);
      await updateDrawFighters(secondUser);
    }

    res.send(compare).status(200);
  } catch {
    res.sendStatus(500);
  }
}
