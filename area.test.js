const getArea = require('./area').getArea;

describe('Test getArea', () => {

  test('Input not array (string)', () => {
    expect(getArea("notValid")).toBe(-1)
  });

  test('Input empty array []', () => {
    expect(getArea([])).toBe(-1)
  });

  test('Input array with wrong length [1]', () => {
    expect(getArea([1])).toBe(-1)
  });

  test('Valid input [1,4]', () => {
    expect(getArea([1, 4])).toBe(4)
  });

  test('Valid input with boundary value [0,4]', () => {
    expect(getArea([0, 4])).toBe(0)
  });

  test('Valid array invalid input float [0,3.5]', () => {
    expect(getArea([0, 3.5])).toBe(-1)
  });

  test('Valid array invalid input strings ["0","3.5"]', () => {
    expect(getArea(["0", "3.5"])).toBe(-1)
  });

  test('Valid array valid input strings ["1","2"]', () => {
    expect(getArea(["1", "2"])).toBe(2)
  });

});