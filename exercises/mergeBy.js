/*
- [ ] `mergeBy` should merge two arrays of objects using a specified key
  - the input arrays must not be mutated
  - the order of the elements must be kept (i.e.: you cannot have Obi-Wan before Anakin/Darth Vader)
*/

const mergeBy = (id, ...arrays) => {
  const ids = new Map();

  // console.log(arrays);
  arrays.forEach(arr => {
    arr.forEach(obj => {
      ids.set(obj.id, { ...(ids.get(obj.id) || {}), ...obj });
    });
  });

  // console.log('id.values', [...ids.values()]);

  return [...ids.values()];
};

module.exports = mergeBy;
