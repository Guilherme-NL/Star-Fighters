import { connection } from "../bd/postgres.js";

export async function postNewFighters(
  user: string,
  win: number,
  lose: number,
  draw: number
) {
  return await connection.query(
    "INSERT INTO fighters(username, wins, losses, draws) VALUES ($1, $2, $3, $4)",
    [user, win, lose, draw]
  );
}

export async function updateWinnerFighters(user: string) {
  return await connection.query(
    `UPDATE fighters SET wins= wins + $1 WHERE username = $2`,
    [1, user]
  );
}

export async function updateLoserFighters(user: string) {
  return await connection.query(
    `UPDATE fighters SET losses= losses + $1 WHERE username = $2`,
    [1, user]
  );
}

export async function updateDrawFighters(user: string) {
  return await connection.query(
    `UPDATE fighters SET draws= draws + $1 WHERE username = $2`,
    [1, user]
  );
}

export async function chekFighter(user: string) {
  const chekUser = await connection.query(
    "SELECT * FROM fighters WHERE username = $1",
    [user]
  );

  return chekUser.rows;
}
