function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    }
    if (arr[mid] == target) {
      return mid;
    }
  }
  return -1;
}

let arr = [2, 4, 4, 7, 8, 10, 22, 23, 30, 50];
let arr2 = [7];
let res = BinarySearch(arr2, 7);
console.log(res);
