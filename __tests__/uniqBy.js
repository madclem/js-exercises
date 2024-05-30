const uniqBy = require('../exercises/uniqBy');

describe('uniqBy', () => {
  it('should deduplicate objects inside an array using the provided key', () => {
    // to do
    expect(
      uniqBy('id', [
        { id: 2, name: 'Anakin', age: 10 },
        {
          id: 0,
          name: 'Obi-Wan',
          side: 'light',
          age: 25,
        },
        { id: 2, name: 'Darth Vader', side: 'dark' },
      ]),
    ).toEqual([
      { id: 2, name: 'Anakin', age: 10 },
      {
        id: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
    ]);
  });
});
