const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  let round = 1;

  const common = input.reduce((a, c) => a * c.test, 1);

  while (round <= process.argv[5]) {
    for (const monk in input) {
      const monke = input[monk];
      const loops = monke.items.length;

      for (let i = 0; i < loops; i++) {
        const item = monke.items.shift();
        const newWorry = eval(monke.operation.replaceAll("old", item)) % common;
        const success = newWorry % monke.test == 0;
        input[monke[success]].items.push(newWorry);
        monke.inspections++;
      }
    }

    round++;
  }

  return input
    .sort((a, b) => a.inspections - b.inspections)
    .map((x) => x.inspections);
};
