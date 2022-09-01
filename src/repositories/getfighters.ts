import { connection } from "../bd/postgres.js";

export async function getAllFighters() {
  const data = await connection.query("SELECT * FROM fighters");

  return data.rows;
}
