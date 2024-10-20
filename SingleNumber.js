//Bit manipulation
function singleNumber(nums) {
  let res = 0;
  for (const n of nums) {
    res ^= n;
  }
  return res;
}

let nums = singleNumber([3, 2, 3]);
console.log(nums);
