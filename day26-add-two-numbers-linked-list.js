// Day 26 - LeetCode 2: Add Two Numbers
// Add two numbers represented by linked lists
// Approach: Iterative Addition with Carry
// Time: O(max(n, m)), Space: O(max(n, m))

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0)
  let current = dummy
  let carry = 0

  while (l1 || l2 || carry) {
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0
    let sum = val1 + val2 + carry
    carry = Math.floor(sum / 10)
    current.next = new ListNode(sum % 10)
    current = current.next

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  return dummy.next
}

function ListNode(val, next = null) {
  this.val = val
  this.next = next
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
console.log(addTwoNumbers(l1, l2))
