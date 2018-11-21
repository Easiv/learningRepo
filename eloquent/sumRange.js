function sum(array) {

  let result = array.reduce((a, b) => {
    return a + b
  })
  return result
}

function range(start, end, step = 1) {
  let result = [];
  if(step !== 0) {
    if(Math.sign(step) === -1) {
      console.log(step)
      step * -1 
      console.log(step)
    }
    // for(let i = start; i <= end; i+=step) {
    //   result.push(i)
    // }
    // return result
  } else {
    throw `Error: Step can't be 0`
  }
}