const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");
module.exports = () => {
  const commonLetters = findCommonLetter();
  const sum = commonLetters.reduce((a, c) => a + charValue(c), 0);
  return sum;
};

function findCommonLetter() {
  const all = [];
  for (let i = 0; i < input.length; i += 3) {
    const [one, two, three] = [
      input[i].split(""),
      input[i + 1].split(""),
      input[i + 2].split(""),
    ];

    const commonItem = one
      .filter((x) => two.includes(x))
      .filter((x) => three.includes(x));
    if (commonItem.length) {
      all.push(commonItem[0]);
    }
  }
  return all;
}

function charValue(char) {
  return char.charCodeAt(0) - (char == char.toLowerCase() ? 96 : 38);
}
