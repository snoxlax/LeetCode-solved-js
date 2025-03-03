// Definition for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head, n) {
  let size = 1;
  let p = head;
  while (p.next !== null) {
    size++;
    p = p.next;
  }

  if (size - n === 0) {
    head = head.next;
    return head;
  }

  let temp = head.next;
  let temp2 = head;
  let i = 1;
  while (temp != null) {
    if (i === size - n) {
      temp2.next = temp.next;
      return head;
    }
    i++;
    temp2 = temp2.next;
    temp = temp.next;
  }
  return head;
}

// Manually creating the linked list [2, 4, 6, 8]
let head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(8);

// Run the reorderList function
head = removeNthFromEnd(head, 2);

console.log(head);
