class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let first = l1;
  let second = l2;
  let head = null;
  let p = null;
  let rem = 0;
  let count = 0;

  if (first !== null || second !== null) {
    let result = first.val + second.val;
    if (result >= 10) {
      rem = Math.floor(result / 10);
    }
    head = new ListNode(result % 10, null);
    first = first.next;
    second = second.next;
    p = head;
  }

  while (first != null || second != null) {
    let temp = new ListNode(0, null);
    let v1 = first ? first.val : 0;
    let v2 = second ? second.val : 0;
    let result = v1 + v2 + rem;

    if (result >= 10) {
      temp.val = result % 10;
      rem = Math.floor(result / 10);
      count++;
    } else {
      temp.val = result;
      rem = 0;
    }
    first = first?.next;
    second = second?.next;
    p.next = temp;
    p = p.next;
  }
  if (rem) {
    let temp = new ListNode(rem, null);
    p.next = temp;
  }
  console.log(count);
  return head;
}

// Create the first linked list: [9,9,9,9,9,9,9]
let listNode1 = new ListNode(9);
listNode1.next = new ListNode(9);
listNode1.next.next = new ListNode(9);
listNode1.next.next.next = new ListNode(9);
listNode1.next.next.next.next = new ListNode(9);
listNode1.next.next.next.next.next = new ListNode(9);
listNode1.next.next.next.next.next.next = new ListNode(9);

// Create the second linked list: [9,9,9,9]
let listNode2 = new ListNode(9);
listNode2.next = new ListNode(9);
listNode2.next.next = new ListNode(9);
listNode2.next.next.next = new ListNode(9);

// Helper function to print the linked list (for verification)
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result);
}

// Print the linked lists to verify
printLinkedList(listNode1); // Output: [9, 9, 9, 9, 9, 9, 9]
printLinkedList(listNode2); // Output: [9, 9, 9, 9]

printLinkedList(addTwoNumbers(listNode1, listNode2));
