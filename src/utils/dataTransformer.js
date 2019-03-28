/**
 * @param data {{}} a key-value object
 * @returns {[{}]} a transformed version of the input object that the PieChart
 * component can read
 */
exports.pie = data => {
  // Data comes in the form:
  // {"label": value}
  let pieData = []
  for (let piece in data) {
    pieData.push({
      id: piece,
      label: exports.normalizeName(piece),
      value: data[piece]
      // Color property ommited but can be modified
      // you will need to modify the pie.config.js file as well
      // color: convertToColor(id)
    })
  }

  return pieData;
}

/**
 * Variables form the API come with "_" in lieu of " ", this
 * function reverses that
 * @param name {String} a string separated by "_"
 * @returns {String} a string separated by spaced instead of "_"
 */
exports.normalizeName = name => {
  let reg = /\_/gi
  return name.replace(reg, ' ')
}
