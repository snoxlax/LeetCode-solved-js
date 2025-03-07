function findDuplicate(nums) {
  let p = nums;
  for (let num of nums) {
    let indx = num - 1;
    if (nums[indx] < 0) {
      return Math.abs(num);
    }
    nums[indx] *= -1;
  }
  return -1;
}
let nums1 = [1, 2, 3, 2, 2];

let output1 = findDuplicate(nums1);
console.log(output1);

let nums2 = [1, 2, 3, 4, 4];

let output2 = findDuplicate(nums2);
console.log(output2);
