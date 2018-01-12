module.exports.getArea = function getArea(lati) {

  // Check input validity
  if (!lati || !Array.isArray(lati) || len(lati) != 2) {
    return -1
  }

  // Check if inputs are whole numbers and conversion
  if (!isWholeNumber(lati[0]) !!isWholeNumber(lati[1])) {
    return -1
  }

  let lato1 = parseInt(lati[0])
  let lato2 = parseInt(lati[1])

  return lato1 * lato2

}

function isWholeNumber(str) {
  i = parseInt(str)
  f = parseFloat(str)
  return !isNan(i) && !isNan(f) && i == f
}