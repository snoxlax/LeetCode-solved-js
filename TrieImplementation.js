class PrefixTreeNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class PrefixTree {
  constructor() {
    this.root = new PrefixTreeNode();
  }

  /**
   * @param {string} word
   * @return {void}
   * Insert each letter of the given word into the prefix tree. If a letter is already recognized during the insertion, we proceed to add the next letter instead.
   */
  insert(word) {
    let node = this.root;

    for (const char of word) {
      const child = node.children[char] || new PrefixTreeNode();
      node.children[char] = child;
      node = child;
    }
    node.isWord = true;
  }
  /**
   * @param {string} word
   * @return {boolean}
   * We need to reach the end node by traversing through the tree of the specific word, iterating through its letters.
   */
  search(word) {
    let node = this.root;

    for (const char of word) {
      const child = node.children[char] || null;

      if (!child) return false;

      node = child;
    }

    return node.isWord;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   * The search begins by checking the letters through the tree. If a pattern of letters is not found in the tree, return false.
   */

  startsWith(prefix) {
    let node = this.root;

    for (const char of prefix) {
      const child = node.children[char] || null;

      if (!child) return false;

      node = child;
    }

    return true;
  }
}

let prefixTree = new PrefixTree();
prefixTree.insert('dog');
console.log(prefixTree.search('dog')); // return true
console.log(prefixTree.search('do')); // return false
console.log(prefixTree.startsWith('do')); // return true
prefixTree.insert('do');
console.log(prefixTree.search('do')); // return true
