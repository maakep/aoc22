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

  const fs = 70000000;
  const needed = 30000000;

  const totalUsed = dirs["/"];
  const needToDelete = needed - (fs - totalUsed);

  let candidates = [];

  for (const cand of Object.keys(dirs)) {
    if (dirs[cand] > needToDelete) {
      candidates.push(dirs[cand]);
    }
  }

  return candidates.sort((a, b) => a - b);
};

function sum(arr) {
  return arr.reduce((a, c) => a + c, 0);
}
