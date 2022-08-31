import axios from "axios";

export default async function compareUser2(secondUser: string) {
  if (!secondUser) {
    throw { code: 404, message: "User NotFound" };
  }

  //firstUser
  const res = await axios.get(
    `https://api.github.com/users/${secondUser}/repos`
  );
  const { data } = res;
  const secondUserData = data;

  let somaSecondUser: number = 0;

  secondUserData.map((e) => {
    somaSecondUser += e.stargazers_count;
  });

  console.log(somaSecondUser);
  return somaSecondUser;
}
