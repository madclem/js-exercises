/*
  From Codewars: Reverse an array, return the result.
  Do whatever you want with the original array.
  Don't use Array.prototype.reverse.

  You have 30 bytes to spare.

  Example: [1, 2, 3] → [3, 2, 1]

  Solution: reverse=a=>a.map(a.pop,[...a])
 */

const reverse = a => a.map(a.pop, [...a]);

module.exports = reverse;
