const chessboard = require('../eloquent/chessboard')

let twoOnTwo = " #\n# \n #\n"
let fiveOnFive = " # #\n# # \n # #\n# # \n # #\n# # \n"
                 
test('it prints chessboard with length equal to provided argument', () => {
  expect(chessboard(2)).toEqual(twoOnTwo);
  expect(chessboard(5)).toEqual(fiveOnFive);
})

module.exports = chessboard;
