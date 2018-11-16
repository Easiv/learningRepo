function hackerrank_array1(ar = [1, 2, 3, 4, 10, 11]) {
    let num = 0;
  
    for (let el of ar) {
        num += el;
    }
    console.log(num);
    return num;
}
module.exports = hackerrank_array1;



