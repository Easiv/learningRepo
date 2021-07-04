const beanCounting = require('../eloquent/beanCounting');
const string = "idontwannacomewithseriousstringS"

test('it counts how many letter occurences were in string', () => {
  expect(beanCounting(string, 'a')).toEqual(2);
  expect(beanCounting(string, 'S')).toEqual(1);
})