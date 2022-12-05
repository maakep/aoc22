const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

const { stacks, instructions } = input;
module.exports = () => {
  // AAARRRRGHHHHHHHHHHHHH
  Object.keys(stacks).forEach((x) => stacks[x].reverse());

  for (const inst of instructions) {
    transfer(inst.from, inst.to, inst.move);
  }

  return stacks;
};

function transfer(from, to, move) {
  for (let i = 0; i < move; i++) {
    const box = stacks[from].pop();
    stacks[to].push(box);
  }
}
