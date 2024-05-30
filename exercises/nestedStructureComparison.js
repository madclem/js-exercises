const nestedStructureComparison = (arr1Base, arr2Base) => {
  let isSame = true;
  const compareArrays = (arr1, arr2) => {
    if (!isSame) return;
    arr1.forEach((el, i) => {
      if (!isSame) return;
      const el2 = arr2[i];
      const elIsArray = Array.isArray(el);
      const sameType = elIsArray === Array.isArray(el2);
      if (elIsArray && sameType && el.length === el2.length) {
        compareArrays(el, el2);
      } else if (!sameType || !el2) {
        isSame = false;
      }
    });
  };

  if (Array.isArray(arr1Base) !== Array.isArray(arr2Base)) return false;
  compareArrays(arr1Base, arr2Base);

  return isSame;
};

module.exports = nestedStructureComparison;
