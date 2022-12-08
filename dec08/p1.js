const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

const width = input[0].length;
const height = input.length;

module.exports = () => {
  let visibles = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const isVisible = isVisibleFromOutside(y, x);
      if (isVisible) {
        visibles++;
      } else {
      }
    }
  }

  return visibles;
};

function isVisibleFromOutside(currY, currX) {
  if ([0, width - 1].includes(currX)) return true;
  if ([0, height - 1].includes(currY)) return true;

  const val = parseInt(input[currY][currX]);

  const left = highestLeft(currY, currX);
  if (val > left) return true;

  const right = highestRight(currY, currX);
  if (val > right) return true;

  const up = highestUp(currY, currX);
  if (val > up) return true;

  const down = highestDown(currY, currX);
  if (val > down) return true;

  return false;
}

function highestLeft(currY, currX) {
  const row = input[currY];
  let highest = 0;
  for (let x = currX - 1; x >= 0; x--) {
    const int = parseInt(row[x]);
    if (int > highest) highest = int;
  }
  return highest;
}

function highestRight(currY, currX) {
  const row = input[currY];
  let highest = 0;
  for (let x = currX + 1; x < width; x++) {
    const int = parseInt(row[x]);

    if (int > highest) highest = int;
  }
  return highest;
}

function highestUp(currY, currX) {
  let highest = 0;
  for (let y = currY - 1; y >= 0; y--) {
    const int = parseInt(input[y][currX]);
    if (int > highest) highest = int;
  }
  return highest;
}

function highestDown(currY, currX) {
  let highest = 0;
  for (let y = currY + 1; y < height; y++) {
    const int = parseInt(input[y][currX]);

    if (int > highest) highest = int;
  }
  return highest;
}
