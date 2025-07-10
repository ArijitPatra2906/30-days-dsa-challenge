// Day 4 - LeetCode 217: Contains Duplicate
// Problem:
// Given an integer array `nums`, return true if any value appears at least twice in the array, and false if every element is distinct.
// Approach: Hash Set for Duplicate Check
// Time: O(n), Space: O(n)

function checkDuplicate(arr) {
  const newArr = new Set()
  for (let num of arr) {
    if (newArr.has(num)) return true
    newArr.add(num)
  }
  return false
}

const arr = [1, 2, 3, 4]
console.log(checkDuplicate(arr))
