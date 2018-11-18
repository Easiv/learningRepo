const recursion = require('../eloquent/recursion');

test('it checks if its even or not', () => {
  expect(recursion(7)).toBe(false);
  expect(recursion(4)).toBe(true);
  expect(recursion(-5)).toBe(false);
})