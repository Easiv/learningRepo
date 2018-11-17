function triangle() {
  let hash = '';

  for(let i = 0; i < 7; i++) {
    hash += '#';
    console.log(hash);
  }
  return hash;
}

module.exports = triangle;
