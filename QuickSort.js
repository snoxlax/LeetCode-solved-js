class Pair {
  /**
   * @param {number} key The key to be stored in the pair
   * @param {string} value The value to be stored in the pair
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class Solution {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[]}
   */
  quickSort(pairs) {
    this.quickSortHelper(pairs, 0, pairs.length - 1);
    return pairs;
  }

  quickSortHelper(arr, s, e) {
    if (e - s < 1) {
      return;
    }
    let left = s;
    for (let i = s; i < e; i++) {
      if (arr[i].key < arr[e].key) {
        let temp = arr[left];
        arr[left] = arr[i];
        arr[i] = temp;
        left++;
      }
    }
    let temp = arr[left];
    arr[left] = arr[e];
    arr[e] = temp;

    this.quickSortHelper(arr, s, left - 1);
    this.quickSortHelper(arr, left + 1, e);
  }
}

const pairs = [new Pair(3, 'cat'), new Pair(2, 'dog'), new Pair(3, 'bird')];
let sol = new Solution();
let res = sol.quickSort(pairs);
console.log(res);
