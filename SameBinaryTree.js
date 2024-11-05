/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p, q) {
    return this.dfs(p, q);
  }

  dfs(pr, qr) {
    if (pr === null && qr === null) {
      return true;
    }

    if (pr === null || qr === null) {
      return false;
    }

    if (pr.val !== qr.val) {
      return false;
    }

    return true && this.dfs(pr.left, qr.left) && this.dfs(pr.right, qr.right);
  }
}

let sol = new Solution();

let Input = sol.isSameTree([1, 2, 3], [1, 2, 3]);

console.log(Input);
