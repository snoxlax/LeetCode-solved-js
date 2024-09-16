function topKFrequent(nums, k) {
  const freqMap = {};
  const bucket = [];
  const result = [];

  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  for (let i = 0; i <= nums.length; i++) {
    bucket[i] = [];
  }

  for (let k in freqMap) {
    let count = freqMap[k];
    bucket[count].push(parseInt(k));
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) {
      result.push(...bucket[i]);
      if (result.length >= k) break; // Stop once we have k elements
    }
  }

  return result;
}
let nums = [1, 2, 2, 3, 3, 3],
  k = 2;
console.log(topKFrequent(nums, k));
let nums2 = [7, 7],
  k2 = 1;
console.log(topKFrequent(nums2, k2));
