const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");
module.exports = () => {
  const orderedInput = input
    .map((x) => x.reduce((a, c) => a + c, 0))
    .sort((elf1, elf2) => {
      return elf2 - elf1;
    });

  return orderedInput.slice(0, 3).reduce((a, c) => a + c, 0);
};
