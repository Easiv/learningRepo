function fizzBuzz() {
  let numbers = []
  for(let i = 1; i <= 100; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
      numbers.push('FizzBuzz');
    } else if(i % 5 === 0 && i % 3 !== 0) {
      console.log('Buzz');
      numbers.push('Buzz');
    } else if(i % 3 === 0) {
      console.log('Fizz');
      numbers.push('Fizz');
    }
    else {
      console.log(i);
      numbers.push(i);
    }
  }
  return numbers;
}

module.exports = fizzBuzz;

