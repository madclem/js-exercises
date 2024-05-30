const strictBouncyArray = require('../exercises/strictBouncyArray.js');

describe('Basic Tests', () => {
  it('Short arrays', () => {
    const arr1 = [0, 9, 6, 10, 5, 11, 10, 12, 13, 4, 2, 5, 1, 6, 4, 8];
    expect(strictBouncyArray(arr1)).toEqual([0, 9, 6, 10, 5, 11, 10, 12]);

    const arr2 = [7, 7, 7, 7, 7];
    expect(strictBouncyArray(arr2)).toEqual([7]);

    const arr3 = [1, 2, 3, 4, 5, 6];
    expect(strictBouncyArray(arr3)).toEqual([1, 2]);
  });
});
