function chessboard(size) {
  let board = '';

  for(let i = 0; i <= size; i++) {
    if(i % 2) {
      board += '# '.repeat(size / 2);
      board += '\n';
    } else {
      board += ' #'.repeat(size / 2);
      board += '\n';
    }
  }
  console.log(board);
  return board;
}

module.exports = chessboard;