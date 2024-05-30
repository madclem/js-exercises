/**
## uniqBy

- [ ] it should deduplicate objects inside an array using the provided key.
  - the input array must not be mutated
  - the order of the elements must be kept (i.e.: you cannot have Obi-Wan before Anakin)

```js
uniqBy('id', [
  { id: 2, name: 'Anakin', age: 10 },
  { id: 0, name: 'Obi-Wan', side: 'light', age: 25 },
  { id: 2, name: 'Darth Vader', side: 'dark' },
]);

[
  { id: 2, name: 'Anakin', age: 10 },
  { id: 0, name: 'Obi-Wan', side: 'light', age: 25 },
];
```
 */

const uniqBy = (id, array) => {
  const ids = {};

  const filteredArray = array.filter(({ id: arrayId }) => {
    if (ids[arrayId]) return false;

    ids[arrayId] = true;
    return true;
  });
  return filteredArray;
};

module.exports = uniqBy;
