function hackerrank_array2(a = [17, 28, 30], b = [99, 16, 8]) {
  let comp = [0, 0];

  if(a[0] > b[0]) {
    comp[0]++
  } else if(a[0] === b[0]) {

  } else {
    comp[1]++
  }

  if(a[1] > b[1]) {
    comp[0]++
  } else if(a[1] === b[1]) {

  }
  else {
    comp[1]++
  }

  if(a[2] > b[2]) {
    comp[0]++
  } else if(a[2] === b[2]) {

  } else {
    comp[1]++
  }

  return comp;
}
module.exports = hackerrank_array2;