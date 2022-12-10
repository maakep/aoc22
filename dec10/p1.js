const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  let cycle = 0;
  let x = 1;
  const executors = [];
  const intervals = { 20: 0, 60: 0, 100: 0, 140: 0, 180: 0, 220: 0 };

  while (true) {
    cycle += 1;
    if (executors.length !== 0) {
      const instruction = executors.shift();

      x += instruction;
    }

    if (intervals[cycle] == 0) {
      intervals[cycle] = x;
    }

    if (executors.length == 0 && input.length !== 0) {
      const line = input.shift();
      const [cmd, num] = line.split(" ");

      if (cmd == "addx") {
        executors.push(...[0, parseInt(num)]);
      }
    }

    if (input.length == 0 && executors.length == 0) break;
  }

  return Object.keys(intervals)
    .map((x) => parseInt(x) * intervals[x])
    .reduce((a, c) => a + c, 0);
};
