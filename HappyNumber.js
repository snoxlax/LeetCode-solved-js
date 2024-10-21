class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  isHappy(n) {
    let numberMap = {};
    let sum = this.sumNumber(n);

    while (sum !== 1) {
      sum = this.sumNumber(sum);
      if (!(sum in numberMap)) {
        numberMap[sum] = true;
      } else {
        return false;
      }
    }
    return true;
  }

  sumNumber(n) {
    let sum = 0;
    while (n > 0) {
      sum += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    return sum;
  }
}

let n = 100;
let n2 = 101;

let sol = new Solution();

let output = sol.isHappy(n);
console.log(output);
output = sol.isHappy(n2);
console.log(output);
