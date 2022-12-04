const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  const totalOverlap = [];

  for (const row of input) {
    const one = getAllNumbersBetween(row[0][0], row[0][1]);
    const two = getAllNumbersBetween(row[1][0], row[1][1]);

    const overlapLeft = one.filter((x) => two.includes(x));

    if (overlapLeft.length) {
      totalOverlap.push(row);
    }
  }

  return totalOverlap.length;
};

function getAllNumbersBetween(a, b) {
  return new Array(b - a + 1).fill("").map((_, i) => a + i);
}
