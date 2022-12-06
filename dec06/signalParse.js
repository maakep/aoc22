module.exports = parseSignal;

function parseSignal(str, size) {
  const array = str.split("");

  for (const index in array) {
    const from = Number.parseInt(index);
    const to = from + size;

    const take = array.slice(from, to);
    const uniques = new Set(take);
    const allUnique = uniques.size === take.length;

    if (allUnique) {
      return to;
    }
  }
}
