const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");
module.exports = () => {
  let biggest = 0;
  let biggestValue = 0;

  for (const i in input) {
    const elf = input[i];
    const sum = elf.reduce((a, c) => a + c, 0);

    if (sum > biggestValue) {
      biggest = Number.parseInt(i) + 1;
      biggestValue = sum;
    }
  }

  return [biggestValue, biggest];
};
