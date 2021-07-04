function minimum(...args) {
  let numbers = args;
  
  let min = Infinity;
  let length = numbers.length
  
  for (let i = 0; i < length; i++) {
    if(numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

function minimum2(a, b) {
  if(a > b) { 
   return b 
  } else return a
}

module.exports = minimum;