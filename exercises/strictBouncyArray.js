const strictBouncyArray = (arr) => {
  // your code here
  let lastDir;
  const bouncyArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    const number = arr[i];
    if (i === 0) {
      bouncyArr.push(number);
      lastDir = Math.sign(number);
    } else {
      const lastNumber = arr[i - 1];
      const dir = Math.sign(lastNumber - number);

      if (dir !== 0 && dir !== lastDir) {
        bouncyArr.push(number);
      } else {
        break;
      }

      lastDir = dir;
    }
  }
  return bouncyArr;
};

module.exports = strictBouncyArray;
