function threeSum(nums) {
  let sorted = nums.sort();
  let l = 0;
  let r = sorted.length - 1;

  console.log(sorted);
  console.log(nums);
  console.log(l, r);
}

let nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
