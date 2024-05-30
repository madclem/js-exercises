const nestedStructureComparison = require('../exercises/nestedStructureComparison.js');

describe('Basic Tests', () => {
  it('Short arrays', () => {
    let arr1 = [1, 1, 1];
    let arr2 = [2, 2, 2];
    expect(nestedStructureComparison(arr1, arr2)).toEqual(true);

    arr1 = [[1, 1], 1];
    arr2 = [[2, 2], 2];
    expect(nestedStructureComparison(arr1, arr2)).toEqual(true);

    arr1 = [1, [1, 1]];
    arr2 = [[2, 2], 2];
    expect(nestedStructureComparison(arr1, arr2)).toEqual(false);

    arr1 = [[[], []]];
    arr2 = [[[], []]];
    expect(nestedStructureComparison(arr1, arr2)).toEqual(true);

    arr1 = [[[], []]];
    arr2 = [[1, 1]];
    expect(nestedStructureComparison(arr1, arr2)).toEqual(false);

    arr1 = [1, [[[1]]]];
    arr2 = [2, [[[2]]]];
    expect(nestedStructureComparison(arr1, arr2)).toEqual(true);

    arr1 = [];
    arr2 = 1;
    expect(nestedStructureComparison(arr1, arr2)).toEqual(false);

    arr1 = [];
    arr2 = {};
    expect(nestedStructureComparison(arr1, arr2)).toEqual(false);

    arr1 = [1, '[', ']'];
    arr2 = ['[', ']', 1];
    expect(nestedStructureComparison(arr1, arr2)).toEqual(true);

    arr1 = [1, 2];
    arr2 = [[3], 3];
    expect(nestedStructureComparison(arr1, arr2)).toEqual(false);
  });
});
