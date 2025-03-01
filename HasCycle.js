class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle(head) {
  let s = head;
  let f = head.next;
  let bool = false;

  while (s.next != null && f.next != null) {
    if (s === f) {
      bool = true;
      break;
    }
    s = s.next;
    f = f.next.next;
  }
  return bool;
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 2 (loop back to node with value 2)
const headWithLoop = new ListNode(1);
headWithLoop.next = new ListNode(2);
headWithLoop.next.next = new ListNode(3);
headWithLoop.next.next.next = new ListNode(4);
headWithLoop.next.next.next.next = headWithLoop.next; // Create a loop

const headWithoutLoop = new ListNode(1);
headWithoutLoop.next = new ListNode(2);
headWithoutLoop.next.next = new ListNode(3);
headWithoutLoop.next.next.next = new ListNode(4);

let noloop = hasCycle(headWithoutLoop);
let loop = hasCycle(headWithLoop);

console.log(noloop, loop);
