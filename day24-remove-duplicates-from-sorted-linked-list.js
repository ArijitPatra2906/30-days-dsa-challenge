// Day 24 - LeetCode 83: Remove Duplicates from Sorted List
// Remove duplicates from a sorted singly linked list
// Approach: Hash Set + Reconstruct New List
// Time: O(n), Space: O(n)

function deleteDuplicates(head) {
  const seen = new Set()
  let dummy = new ListNode(0)
  let tail = dummy

  while (head) {
    if (!seen.has(head.val)) {
      seen.add(head.val)
      tail.next = new ListNode(head.val)
      tail = tail.next
    }
    head = head.next
  }

  return dummy.next
}

// Example usage (you can ignore this during submission):
// Helper function to create linked list
function ListNode(val, next = null) {
  this.val = val
  this.next = next
}

const head = new ListNode(1, new ListNode(1, new ListNode(2)))
console.log(deleteDuplicates(head))
