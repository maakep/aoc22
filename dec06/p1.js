const parseSignal = require("./signalParse");

const input =
  process.argv[4] == "t" ? require("./input-test") : require("./input");

module.exports = () => {
  return parseSignal(input, 4);
};
