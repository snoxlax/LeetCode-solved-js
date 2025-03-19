class Solution {
  /**
   * @param {TreeNode} root
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    if (!root) {
      return false;
    }
    if (this.sameTree(root, subRoot)) {
      return true;
    }
    return (
      this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    );
  }

  sameTree(rootT, rootS) {
    if (!rootT && !rootS) {
      return true;
    }

    if (rootT && rootS && rootT.val === rootS.val) {
      return (
        this.sameTree(rootT.left, rootS.left) &&
        this.sameTree(rootT.right, rootS.right)
      );
    }
    return false;
  }
}
///working
