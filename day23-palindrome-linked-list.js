// Day 23 - LeetCode 234: Palindrome Linked List
// Check if a singly linked list is a palindrome
// Approach: Convert to Array + Reverse Check
// Time: O(n), Space: O(n)

function isPalindrome(head) {
  const values = []

  let current = head
  while (current) {
    values.push(current.val)
    current = current.next
  }

  const reversed = [...values].reverse()

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== reversed[i]) return false
  }

  return true
}

// Example usage (you can ignore this during submission):
// Helper function to create linked list
function ListNode(val, next = null) {
  this.val = val
  this.next = next
}
const head = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
console.log(isPalindrome(head))
