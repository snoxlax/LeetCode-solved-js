function twoSum(nums, target) {
  let j = 0;
  let b = [];

  nums.forEach((v, i) => {
    j = i + 1;
    while (j < nums.length) {
      if (nums[j] + v === target) {
        b = [i, j];
      }
      j++;
    }
  });
  return b;
}

let nums = [3, 4, 5, 6],
  target = 7,
  sum;
sum = twoSum(nums, target);
console.log(sum);
