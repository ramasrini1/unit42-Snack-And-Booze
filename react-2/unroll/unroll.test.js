// To run this test
// npm test unroll.test.js

const unroll = require("./unroll");
const array = [1, 2, 3, 4];

const array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const spiralArray1 = [
  1, 2, 3, 6, 9, 8, 7, 4, 5
];

const array2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

const spiralArray2 = [ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

const rectangularArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  describe("3D array input", () => {
    test("3D array input values", () => {
      expect(unroll(array1)).toEqual(spiralArray1);
    });
  });

  describe("4D array input", () => {
    test("4D array input values", () => {
      expect(unroll(array2)).toEqual(spiralArray2);
    });
  });

  describe("Empty array input", () => {
    test("Empty array input values", () => {
      expect(unroll([])).toEqual(-1);
    });
  });

  describe("one dim array input", () => {
    test("Ond dim input values", () => {
      expect(unroll(array)).toEqual(-1);
    });
  });

  describe("Not a square array input", () => {
    test("Not a square array input values", () => {
      expect(unroll(rectangularArray)).toEqual(-1);
    });
  });

});
