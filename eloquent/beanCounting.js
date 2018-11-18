function beanCounting(str, letter) {
  let be = "B"
  let occurences = 0;

  for(let i = 0; i < str.length; i++) {
    if(str[i] === letter) {
      occurences++
    }
  }
  return occurences;
}

module.exports = beanCounting;