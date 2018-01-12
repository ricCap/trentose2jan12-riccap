module.exports.getArea = function getArea(lati) {

  // Check input validity
  if (!lati || !Array.isArray(lati) || lati.length != 2) {
    return -1
  }

  if (!isWholePositiveNumber(lati[0]) || !isWholePositiveNumber(lati[1])) {
    return -1
  }

  let lato1 = parseInt(lati[0])
  let lato2 = parseInt(lati[1])

  return lato1 * lato2

}

function isWholePositiveNumber(str) {
  i = parseInt(str)
  f = parseFloat(str)
  return !isNaN(i) && !isNaN(f) && i == f && i >= 0
}