// Day 25 - LeetCode 898: Bitwise ORs of Subarrays
// Count the number of unique results from bitwise OR of all subarrays
// Approach: Set to track current and result ORs
// Time: O(n * 30), Space: O(n)

function subarrayBitwiseORs(arr) {
  let result = new Set(),
    cur = new Set()
  for (let num of arr) {
    let next = new Set([num])
    for (let val of cur) {
      next.add(val | num)
    }
    for (let val of next) {
      result.add(val)
    }
    cur = next
  }
  return result.size
}

const arr = [0]
console.log(subarrayBitwiseORs(arr))

const arr2 = [1, 1, 2]
console.log(subarrayBitwiseORs(arr2))
