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
  //Another option for a solution instead of the sameTree function
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
///working
