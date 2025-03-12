function minEatingSpeed(piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let res = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (let p of piles) {
      sum += Math.ceil(p / mid);
    }
    if (sum <= h) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return res;
}

let piles = [1, 4, 3, 2];
console.log(minEatingSpeed(piles, 9));
