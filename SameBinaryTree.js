// TreeNode class definition
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

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

// Helper function to convert an array into a binary tree
function arrayToTree(arr) {
  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();

    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

let sol = new Solution();

// Convert arrays to binary trees
let tree1 = arrayToTree([1, 2, 3]);
let tree2 = arrayToTree([1, 2, 3]);

// Call isSameTree with TreeNode inputs
let result1 = sol.isSameTree(tree1, tree2);

console.log(result1); // Output should be true if trees are identical

let tree3 = arrayToTree([1, 2, 3]);
let tree4 = arrayToTree([1, 5, 3]);

// Call isSameTree with TreeNode inputs
let result2 = sol.isSameTree(tree3, tree4);

console.log(result2); // Output should be true if trees are identical
