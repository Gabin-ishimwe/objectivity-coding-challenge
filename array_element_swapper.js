function swapArr(arr, m, n) {
  if (m > arr.length || n > arr.length) return "Index out of range";
  let temp = arr[m];
  arr[m] = arr[n];
  arr[n] = temp;
  return arr;
}
let arr = [1, 2, 3, 4, 5];
let m = 2;
let n = 1;
console.log(swapArr(arr, m, n));
