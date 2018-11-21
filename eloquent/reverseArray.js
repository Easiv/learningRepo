function reverseArray(arr) {
  let reversed = [];
  
  for(i=arr.length; i > 0; i--) {
    reversed.push(arr[i])
    console.log(reversed)
    console.log(i)
  }
  return reversed;
}