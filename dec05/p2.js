const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

const { stacks, instructions } = input;
module.exports = () => {
  Object.keys(stacks).forEach((x) => stacks[x].reverse());

  for (const inst of instructions) {
    transfer(inst.from, inst.to, inst.move);
  }

  return stacks;
};

function transfer(from, to, move) {
  const boxes = mySlice(move, from);
  stacks[to].push(...boxes);
}

function mySlice(quantity, from) {
  const boxes = stacks[from].slice(-quantity);
  stacks[from] = stacks[from].splice(0, stacks[from].length - quantity);
  return boxes;
}
