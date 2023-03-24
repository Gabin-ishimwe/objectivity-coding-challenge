function swapArr(arr, m, n) {

  // check if indexes provided don't exceed the arr length
  if (m > arr.length || n > arr.length) return "Index out of range";

  // store value at index m in a temporary variable
  let temp = arr[m];

  // store value at index n in place of value at index m
  arr[m] = arr[n];

  // store the temporary variable in value of index n
  arr[n] = temp;

  // return new array
  return arr;
}

// test
let arr = [1, 2, 3, 4, 5];
let m = 2;
let n = 1;
console.log(swapArr(arr, m, n));
