const mergeBy = require('../exercises/mergeBy');

describe('mergeBy', () => {
  it('should merge an array of objects using the provided key', () => {
    // to do
    expect(
      mergeBy(
        'id',
        [
          { id: 2, name: 'Anakin', age: 10 },
          {
            id: 0,
            name: 'Obi-Wan',
            side: 'light',
            age: 25,
          },
        ],
        [
          {
            id: 1,
            name: 'Luke',
            side: 'light',
            age: 50,
          },
          { id: 2, name: 'Darth Vader', side: 'dark' },
          {
            id: 7,
            name: 'Yoda',
            side: 'light',
            age: 1000,
          },
        ],
      ),
    ).toEqual([
      {
        id: 2,
        name: 'Darth Vader',
        age: 10,
        side: 'dark',
      },
      {
        id: 0,
        name: 'Obi-Wan',
        side: 'light',
        age: 25,
      },
      {
        id: 1,
        name: 'Luke',
        side: 'light',
        age: 50,
      },
      {
        id: 7,
        name: 'Yoda',
        side: 'light',
        age: 1000,
      },
    ]);
  });
});
