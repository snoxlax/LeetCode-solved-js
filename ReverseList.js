function reverseList(head) {
  let [prev, curr, next] = [null, head, null];

  while (curr) {
    next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}

let input = [0, 1, 2, 3, 4, 5];
let output = reverseList(input);

console.log(output);
