const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  let cycle = 0;
  let x = 1;
  const executors = [];

  const crt = [];
  let row = new Array(40).fill(".");

  while (true) {
    const i = (cycle % 40) + 1;

    if (executors.length !== 0) {
      const instruction = executors.shift();
      x += instruction;
    }

    if ((cycle + 1) % 40 == 0) {
      crt.push(row);
      row = new Array(40).fill(".");
    }

    if ([x, x + 1, x + 2].includes(i)) {
      row[i - 1] = "#";
    }

    if (executors.length == 0 && input.length !== 0) {
      const line = input.shift();
      const [cmd, num] = line.split(" ");

      if (cmd == "addx") {
        executors.push(...[0, parseInt(num)]);
      }
    }

    cycle += 1;
    if (input.length == 0 && executors.length == 0) break;
  }

  for (const r of crt) {
    console.log(r.join(""));
  }
};
