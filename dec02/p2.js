const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

/*
  X means you need to lose, 
  Y means you need to end the round in a draw, 
  Z means you need to win
*/

module.exports = () => {
  return input.reduce((acc, curr) => {
    const enemy = curr[0];
    const me = curr[2];

    return acc + determineResult(enemy, me);
  }, 0);
};

function determineResult(enemy, me) {
  if (me == "X") return points[lose[enemy]] + 0;
  if (me == "Y") return points[draw[enemy]] + 3;
  if (me == "Z") return points[win[enemy]] + 6;
}

const points = {
  A: 1,
  B: 2,
  C: 3,
};

const win = {
  A: "B",
  B: "C",
  C: "A",
};

const lose = {
  A: "C",
  B: "A",
  C: "B",
};

const draw = {
  A: "A",
  B: "B",
  C: "C",
};
