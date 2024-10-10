function productExceptSelf(nums) {
  const sol = [];

  for (let i = 0; i < nums.length; i++) {
    sol.push(1);
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }
      sol[i] *= nums[j];
    }
  }
  return sol;
}

let nums = [1, 2, 4, 6];

let output = productExceptSelf(nums);

console.log(output);
