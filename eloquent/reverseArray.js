function reverseArray(arr) {
  let reversed = [];
  
  for(i=arr.length; i > 0; i--) {
    reversed.push(arr[i - 1])
  }
  return reversed;
}