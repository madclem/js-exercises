const reverse = require('../exercises/reverse.js');

describe('Soul of wit', () => {
  it('should reverse arrays', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverse([...'01234567890123456789'])).toEqual([...'98765432109876543210']);
    expect(reverse([0, undefined])).toEqual([undefined, 0]);
  });
});
