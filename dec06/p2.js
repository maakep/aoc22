const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  const array = input.split("");
  let signalStart = 0;

  for (const index in array) {
    const i = Number.parseInt(index);

    const take = array.slice(i, i + 14);
    const allUnique = take.every((x) => take.filter((y) => x == y).length == 1);
    if (allUnique) {
      signalStart = i + 14;
      break;
    }
  }

  return signalStart;
};
