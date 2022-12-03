const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");
module.exports = () => {
  const commonLetters = findCommonLetter();
  const sum = commonLetters.reduce((a, c) => a + charValue(c), 0);
  return sum;
};

function findCommonLetter() {
  const all = [];
  for (const row of input) {
    const half = row.length / 2;
    const first = row.slice(0, half).split("");
    const second = row.slice(half).split("");

    const commonItem = first.filter((x) => second.includes(x));
    if (commonItem.length) {
      all.push(commonItem[0]);
    }
  }
  return all;
}

function charValue(char) {
  return char.charCodeAt(0) - (char == char.toLowerCase() ? 96 : 38);
}
