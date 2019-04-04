/**
 * @param data {{}} a key-value object
 * @returns {[{}]} a transformed version of the input object that the PieChart
 * component can read
 */
exports.metrics_to_pie = metrics => {
  // Data comes in the form:
  // {"label": value}
  let pieData = []
  for (let item in metrics) {
    pieData.push({
      id: exports.normalizeName(item),
      label: exports.normalizeName(item),
      value: metrics[item]
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
  let reg = /_/gi
  return name.replace(reg, ' ')
}

exports.metrics_to_bar = metrics => {
  let barData = [];
  let i = 0;
  for(let item in metrics){
    let id = item.split("_")[0];
    barData.push({
      provider: id
    })
    
    barData[i][id] = metrics[item];
    i++;
  }
  return barData;

}