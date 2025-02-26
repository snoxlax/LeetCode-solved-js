class Solution {
  backtrack(open, close, n, result, stack) {
    if (open === close && open === n) {
      result.push(stack);
      return;
    }
    if (open < n) {
      this.backtrack(open + 1, close, n, result, stack + '(');
    }
    if (open > close) {
      this.backtrack(open, close + 1, n, result, stack + ')');
    }
  }
  generateParenthesis(n) {
    const res = [];
    this.backtrack(0, 0, n, res, '');
    return res;
  }
}

let input = 2;
let sol = new Solution();
console.log(sol.generateParenthesis(input));
