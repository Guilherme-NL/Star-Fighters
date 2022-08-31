export default async function compareUsers(
  firstUserStars: number,
  secondUserStars: number,
  firstUser: string,
  secondUser: string
) {
  if (firstUserStars > secondUserStars) {
    return {
      winner: firstUser,
      loser: secondUser,
      draw: false,
    };
  }

  if (firstUserStars < secondUserStars) {
    return {
      winner: secondUser,
      loser: firstUser,
      draw: false,
    };
  }

  return {
    winner: null,
    loser: null,
    draw: true,
  };
}
