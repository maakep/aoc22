const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

/*
    A X rock 1 
    B Y paper 2
    C Z scissor 3
*/

const guide = {
  "A X": 1 + 3,
  "A Y": 2 + 6,
  "A Z": 3,

  "B X": 1,
  "B Y": 2 + 3,
  "B Z": 3 + 6,

  "C X": 1 + 6,
  "C Y": 2,
  "C Z": 3 + 3,
};

module.exports = () => {
  return input.reduce((a, c) => a + guide[c], 0);
};
