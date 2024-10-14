function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  let currsum = numbers[l] + numbers[r];

  while (l < r) {
    if (currsum > target) {
      r--;
    }
    if (currsum < target) {
      l++;
    }
    if (currsum === target) {
      return [l + 1, r + 1];
    }
    currsum = numbers[l] + numbers[r];
  }
}

let numbers = twoSum([1, 2, 3, 4], 3);

let out = numbers;

console.log(out);
