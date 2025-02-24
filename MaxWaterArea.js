function maxArea(heights) {
  let i = 0;
  let j = heights.length - 1;
  let maxW = 0;
  while (i < j) {
    let h = Math.min(heights[i], heights[j]);
    let w = j - i;
    maxW = Math.max(maxW, h * w);
    if (heights[i] < heights[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxW;
}

let heights1 = [1, 7, 2, 5, 4, 7, 3, 6];
let res1 = maxArea(heights1);
console.log(res1);

let heights2 = [2, 2, 2];
let res2 = maxArea(heights2);
console.log(res2);
