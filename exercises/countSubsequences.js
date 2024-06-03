const countSubsequences = (needle, haystack) => {
  let currentIndexNeedle = 0;
  let needleFound = 0;

  const branches = new Array(needle.length).fill(0);

  haystack.split('').forEach((letterHaystack) => {
    const letterToFind = needle[currentIndexNeedle];

    if (letterHaystack === letterToFind) {
      branches[currentIndexNeedle] += 1;
      currentIndexNeedle += 1;


      if (currentIndexNeedle > needle.length - 1) {
        needleFound += 1;
      }
    } else if (currentIndexNeedle > 0 && letterHaystack === needle[currentIndexNeedle - 1]) {
      branches[currentIndexNeedle - 1] += 1;
    }
  });

  let n = needleFound;

  for (let i = branches.length - 1; i >= 0; i -= 1) {
    n *= branches[i];
  }

  return n;
};

module.exports = countSubsequences;


// happy birthday
