import axios from "axios";

export default async function compareUser1(firstUser: string) {
  if (!firstUser) {
    throw { code: 404, message: "User NotFound" };
  }

  //firstUser
  const res = await axios.get(
    `https://api.github.com/users/${firstUser}/repos`
  );
  const { data } = res;
  const firstUserData = data;

  let somaFirstUser: number = 0;

  firstUserData.map((e) => {
    somaFirstUser += e.stargazers_count;
  });

  console.log(somaFirstUser);
  return somaFirstUser;
}
