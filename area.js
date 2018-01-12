module.exports.getArea = function getArea(lati) {

  // Check input validity
  if (!lati || !Array.isArray(lati) || lati.length != 2) {
    return -1
  }

  if (!isWholeNumber(lati[0]) || !isWholeNumber(lati[1])) {
    return -1
  }

  let lato1 = parseInt(lati[0])
  let lato2 = parseInt(lati[1])

  return lato1 * lato2

}

function isWholeNumber(str) {
  i = parseInt(str)
  f = parseFloat(str)
  return !isNaN(i) && !isNaN(f) && i == f
}