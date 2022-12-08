const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

const width = input[0].length;
const height = input.length;

module.exports = () => {
  let bestScore = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const score = treeScore(y, x);
      if (score > bestScore) bestScore = score;
    }
  }

  return bestScore;
};

function treeScore(currY, currX) {
  if ([0, width - 1].includes(currX)) return true;
  if ([0, height - 1].includes(currY)) return true;

  const val = parseInt(input[currY][currX]);

  const left = highestLeft(currY, currX, val);
  const right = highestRight(currY, currX, val);
  const up = highestUp(currY, currX, val);
  const down = highestDown(currY, currX, val);

  return left * right * up * down;
}

function highestLeft(currY, currX, val) {
  const row = input[currY];
  let score = 0;
  for (let x = currX - 1; x >= 0; x--) {
    score++;
    const int = parseInt(row[x]);
    if (int >= val) break;
  }
  return score;
}

function highestRight(currY, currX, val) {
  const row = input[currY];
  let score = 0;
  for (let x = currX + 1; x < width; x++) {
    score++;
    const int = parseInt(row[x]);
    if (int >= val) break;
  }
  return score;
}

function highestUp(currY, currX, val) {
  let score = 0;
  for (let y = currY - 1; y >= 0; y--) {
    score++;
    const int = parseInt(input[y][currX]);
    if (int >= val) break;
  }
  return score;
}

function highestDown(currY, currX, val) {
  let score = 0;
  for (let y = currY + 1; y < height; y++) {
    score++;
    const int = parseInt(input[y][currX]);
    if (int >= val) break;
  }
  return score;
}
