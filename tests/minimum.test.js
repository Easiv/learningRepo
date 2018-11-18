const minimum = require('../eloquent/minimum');
const array = [5, 4, 6, 2, 8];

test('it chooses the minimum value from the array', () => {
  expect(minimum(...array)).toEqual(2);
})
