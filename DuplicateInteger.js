function hasDuplicate(nums) {
  const setnums = new Set(nums);
  let b = false;
  if (setnums.size === nums.length) {
    b = false;
  } else {
    b = true;
  }
  return b;
}

let nums = [1, 2, 3, 3],
  b;
console.log(hasDuplicate(nums));
