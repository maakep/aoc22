const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

const moves = {
  R: ["x", 1],
  L: ["x", -1],
  U: ["y", 1],
  D: ["y", -1],
};

module.exports = () => {
  const h = {
    x: 0,
    y: 0,
  };
  const t = {
    ...h,
  };

  let positions = new Set();
  positions.add("0,0");

  for (const line of input) {
    const [dir, num] = line;

    for (let i = 0; i < num; i++) {
      move(h, dir);

      if (!isTouching(t, h)) {
        follow(t, h);
        positions.add(`${t.x},${t.y}`);
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
