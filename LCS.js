function longestConsecutive(nums) {
  if (nums.length === 0) {
    return 0;
  }

  const numSet = new Set(nums);
  let max = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let count = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        count++;
      }

      max = Math.max(max, count);
    }
  }

  return max;
}

let nums = [2, 20, 4, 10, 3, 4, 5];

let output = longestConsecutive(nums);

console.log(output);
