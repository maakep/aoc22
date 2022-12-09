const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

const moves = {
  R: ["x", 1],
  L: ["x", -1],
  U: ["y", 1],
  D: ["y", -1],
};

module.exports = () => {
  const s = {
    x: 0,
    y: 0,
  };
  const rope = new Array(10).fill("").map(() => ({ ...s }));

  let positions = new Set();
  positions.add("0,0");

  for (const line of input) {
    const [dir, num] = line;

    for (let i = 0; i < num; i++) {
      move(rope[0], dir);

      for (let ri = 1; ri < rope.length; ri++) {
        if (!isTouching(rope[ri], rope[ri - 1])) {
          follow(rope[ri], rope[ri - 1]);

          if (ri == 9) {
            positions.add(`${rope[ri].x},${rope[ri].y}`);
          }
        }
      }
    }
  }

  return positions.size;
};

function move(h, dir) {
  const m = moves[dir];
  h[m[0]] += m[1];
}

function isTouching(t, h) {
  return Math.abs(t.x - h.x) < 2 && Math.abs(t.y - h.y) < 2;
}

function follow(t, h) {
  if (t.x != h.x) {
    t.x += minmax(h.x - t.x);
  }
  if (t.y != h.y) {
    t.y += minmax(h.y - t.y);
  }
}

function minmax(x) {
  return Math.max(-1, Math.min(1, x));
}
