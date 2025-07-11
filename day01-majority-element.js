// Day 1 - LeetCode 169: Majority Element
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Approach: Moore’s Voting Algorithm
// Time: O(n), Space: O(1)

const array1 = [1, 2]
const array2 = [2, 2, 1, 1, 1, 2, 2]

function checkMajorityElement(array) {
  let candidate = array[0]
  let count = 0

  for (let num of array) {
    if (count === 0) candidate = num
    count += candidate === num ? 1 : -1
  }

  return candidate
}

console.log(checkMajorityElement(array2))
