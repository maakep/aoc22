const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

const CD = "$ cd ";

module.exports = () => {
  const dirs = {};
  const cwd = [];
  let current = "";

  for (const line of input) {
    if (line.startsWith(CD)) {
      if (line.endsWith("..")) {
        cwd.pop();
      } else {
        cwd.push(line.replace(CD, ""));
        current = cwd.join("/");
        dirs[current] = dirs[current] || 0;
      }

      continue;
    }

    if (line.match(/^[0-9]+ [a-z.]+$/i)) {
      for (const index in cwd) {
        dirs[cwd.slice(0, parseInt(index) + 1).join("/")] += parseInt(line);
      }

      continue;
    }
  }

  const over100k = Object.keys(dirs).filter((x) => dirs[x] <= 100000);
  const sums = sum(over100k.map((x) => dirs[x]));

  return sums;
};

function sum(arr) {
  return arr.reduce((a, c) => a + c, 0);
}
