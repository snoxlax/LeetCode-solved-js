function rob(nums) {
  let rob1 = 0;
  let rob2 = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.max(nums[i] + rob1, rob2);
    rob1 = rob2;
    rob2 = nums[i];
  }
  return rob2;
}

let nums2 = [9, 6, 8, 3, 6];
let out2 = rob(nums2);
console.log(out2);
console.log(nums2);
