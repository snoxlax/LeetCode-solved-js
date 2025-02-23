/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = 1;
  if (nums.length === 1) {
    return true;
  }
  for (let i = 1; i < nums.length * 2 - 1; i++) {
    if (nums[i % nums.length] >= nums[(i - 1) % nums.length]) {
      count++;
    } else {
      count = 1;
    }
    if (count === nums.length) {
      return true;
    }
  }
  return false;
};

let nums1 = [3, 4, 5, 1, 2];
let ans1 = check(nums1);
console.log(ans1);

let nums2 = [2, 1, 3, 4];
let ans2 = check(nums2);
console.log(ans2);
