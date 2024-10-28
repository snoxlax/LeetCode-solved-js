function climbStairs(n) {
  if (n <= 3) {
    return n;
  }
  let n1 = 2;
  let n2 = 3;
  for (let i = 4; i <= n; i++) {
    const temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }
  return n2;
}

let input = 2;
let output = climbStairs(input);
console.log(output);

let input2 = 4;
let output2 = climbStairs(input2);
console.log(output2);
