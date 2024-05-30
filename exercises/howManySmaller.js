
/**
 Aoutch, started with a naive On2 implementation
 ```
 const howManySmaller = arr =>
  arr.map((n, i) => arr.slice(i + 1, arr.length).reduce((prev, curr) => (curr < n ? prev + 1 : prev), 0));
```

but had to get some help from chatgpt :see-no-evil: to optimise it for this one.
*/

const howManySmaller = (arr) => {
  const sorted = [];
  const counts = new Array(arr.length).fill(0);

  // Function to find the number of elements smaller than target using binary search
  const binarySearch = (sortedArr, target) => {
    let left = 0;
    let right = sortedArr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedArr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  };

  // Traverse the array from right to left
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const n = arr[i];
    const index = binarySearch(sorted, n);
    counts[i] = index;
    sorted.splice(index, 0, n);
  }

  return counts;
};
module.exports = howManySmaller;


/**

using the input array `[5, 4, 7, 9, 2, 4, 4, 5, 6]`.

### Initial Setup
- `arr = [5, 4, 7, 9, 2, 4, 4, 5, 6]`
- `sorted = []` (an initially empty list to keep elements in sorted order)
- `counts = [0, 0, 0, 0, 0, 0, 0, 0, 0]` (array to store the result)

### Step-by-Step Execution

1. **Processing element 6 (index 8)**
   - `n = 6`
   - `binarySearch(sorted, 6)`:
     - `left = 0`, `right = 0` (since `sorted` is empty)
     - No elements to compare, return `left` which is `0`
   - Insert `6` at index `0` in `sorted`:
     - `sorted = [6]`
   - Update `counts[8] = 0` (no elements smaller than 6 to the right)

2. **Processing element 5 (index 7)**
   - `n = 5`
   - `binarySearch(sorted, 5)`:
     - `left = 0`, `right = 1`
     - `mid = 0`, compare `sorted[0] = 6` with `5`
     - `6 >= 5`, so `right = 0`
     - Return `left` which is `0`
   - Insert `5` at index `0` in `sorted`:
     - `sorted = [5, 6]`
   - Update `counts[7] = 0` (no elements smaller than 5 to the right)

3. **Processing element 4 (index 6)**
   - `n = 4`
   - `binarySearch(sorted, 4)`:
     - `left = 0`, `right = 2`
     - `mid = 1`, compare `sorted[1] = 6` with `4`
     - `6 >= 4`, so `right = 1`
     - `mid = 0`, compare `sorted[0] = 5` with `4`
     - `5 >= 4`, so `right = 0`
     - Return `left` which is `0`
   - Insert `4` at index `0` in `sorted`:
     - `sorted = [4, 5, 6]`
   - Update `counts[6] = 0` (no elements smaller than 4 to the right)

4. **Processing element 4 (index 5)**
   - `n = 4`
   - `binarySearch(sorted, 4)`:
     - `left = 0`, `right = 3`
     - `mid = 1`, compare `sorted[1] = 5` with `4`
     - `5 >= 4`, so `right = 1`
     - `mid = 0`, compare `sorted[0] = 4` with `4`
     - `4 >= 4`, so `right = 0`
     - Return `left` which is `0`
   - Insert `4` at index `0` in `sorted`:
     - `sorted = [4, 4, 5, 6]`
   - Update `counts[5] = 0` (no elements smaller than 4 to the right)

5. **Processing element 2 (index 4)**
   - `n = 2`
   - `binarySearch(sorted, 2)`:
     - `left = 0`, `right = 4`
     - `mid = 2`, compare `sorted[2] = 5` with `2`
     - `5 >= 2`, so `right = 2`
     - `mid = 1`, compare `sorted[1] = 4` with `2`
     - `4 >= 2`, so `right = 1`
     - `mid = 0`, compare `sorted[0] = 4` with `2`
     - `4 >= 2`, so `right = 0`
     - Return `left` which is `0`
   - Insert `2` at index `0` in `sorted`:
     - `sorted = [2, 4, 4, 5, 6]`
   - Update `counts[4] = 0` (no elements smaller than 2 to the right)

6. **Processing element 9 (index 3)**
   - `n = 9`
   - `binarySearch(sorted, 9)`:
     - `left = 0`, `right = 5`
     - `mid = 2`, compare `sorted[2] = 4` with `9`
     - `4 < 9`, so `left = 3`
     - `mid = 4`, compare `sorted[4] = 6` with `9`
     - `6 < 9`, so `left = 5`
     - Return `left` which is `5`
   - Insert `9` at index `5` in `sorted`:
     - `sorted = [2, 4, 4, 5, 6, 9]`
   - Update `counts[3] = 5` (five elements smaller than 9 to the right)

7. **Processing element 7 (index 2)**
   - `n = 7`
   - `binarySearch(sorted, 7)`:
     - `left = 0`, `right = 6`
     - `mid = 3`, compare `sorted[3] = 5` with `7`
     - `5 < 7`, so `left = 4`
     - `mid = 5`, compare `sorted[5] = 9` with `7`
     - `9 >= 7`, so `right = 5`
     - `mid = 4`, compare `sorted[4] = 6` with `7`
     - `6 < 7`, so `left = 5`
     - Return `left` which is `5`
   - Insert `7` at index `5` in `sorted`:
     - `sorted = [2, 4, 4, 5, 6, 7, 9]`
   - Update `counts[2] = 5` (five elements smaller than 7 to the right)

8. **Processing element 4 (index 1)**
   - `n = 4`
   - `binarySearch(sorted, 4)`:
     - `left = 0`, `right = 7`
     - `mid = 3`, compare `sorted[3] = 5` with `4`
     - `5 >= 4`, so `right = 3`
     - `mid = 1`, compare `sorted[1] = 4` with `4`
     - `4 >= 4`, so `right = 1`
     - `mid = 0`, compare `sorted[0] = 2` with `4`
     - `2 < 4`, so `left = 1`
     - Return `left` which is `1`
   - Insert `4` at index `1` in `sorted`:
     - `sorted = [2, 4, 4, 4, 5, 6, 7, 9]`
   - Update `counts[1] = 1` (one element smaller than 4 to the right)

9. **Processing element 5 (index 0)**
   - `n = 5`
   - `binarySearch(sorted, 5)`:
     - `left = 0`, `right = 8`
     - `mid = 4`, compare `sorted[4] = 5` with `5`
     - `5 >= 5`, so `right = 4`
     - `mid = 2`, compare `sorted[2] = 4` with `5`
     - `4 < 5`, so `left = 3`
     - `mid = 3`, compare `sorted[3] = 4` with `5`
     - `4 < 5`, so `left = 4`
     - Return `left` which is `4`
   - Insert `5` at index `4` in `sorted`:
     - `sorted = [2, 4, 4, 4, 5, 5, 6, 7, 9]`
   - Update `counts[0] = 4` (four elements smaller than 5 to the right)

### Final State
- `counts = [4, 1, 5, 5, 0, 0, 0, 0, 0]`

The final `counts` array indicates the number of smaller elements to the right for each element in the original array `[5, 4, 7, 9, 2, 4, 4, 5, 6]`.


 */
