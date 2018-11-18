function recursion(num) {
  if(num === 0) return true;
  else if(num === 1) return false;
  else if(num < 0) return recursion(-num);
  else return recursion(num - 2);
}

function notRecursion(num) {
  if(num % 2 === 0) {
    return true
  } else {
    return false
  }
}

module.exports = recursion;