// Definition for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reorderList(head) {
  if (!head || !head.next) return;

  let m = head;
  let end = head.next;

  while (end && end.next) {
    m = m.next;
    end = end.next.next;
  }

  let tail = null;
  let curr = m.next;
  m.next = null;
  while (curr) {
    let next = curr.next;
    curr.next = tail;
    tail = curr;
    curr = next;
  }

  let first = head;
  let second = tail;
  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
}

// Manually creating the linked list [2, 4, 6, 8]
let head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(8);

// Run the reorderList function
reorderList(head);

// Print the reordered list
let current = head;
while (current) {
  process.stdout.write(current.val + (current.next ? ' -> ' : '\n'));
  current = current.next;
}
