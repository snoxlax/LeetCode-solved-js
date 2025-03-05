function copyRandomList(head) {
  let curr = head;
  const oldToCopy = new Map();
  oldToCopy.set(null, null);

  while (curr !== null) {
    let copy = new Node(curr.val);
    oldToCopy.set(curr, copy);
    curr = curr.next;
  }

  curr = head;
  while (curr !== null) {
    let copy = oldToCopy.get(curr);
    copy.next = oldToCopy.get(curr.next);
    copy.random = oldToCopy.get(curr.random);
    curr = curr.next;
  }

  return oldToCopy.get(head);
}

let head = [
  [3, null],
  [7, 3],
  [4, 0],
  [5, 1],
];

let Output = [
  [3, null],
  [7, 3],
  [4, 0],
  [5, 1],
];

//it works
