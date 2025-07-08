// Day 2 - LeetCode 1: Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Approach: Brute-force Algorithm
// Time: O(n²), Space: O(1)

const arr = [2, 7, 11, 15]
const target = 9

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

console.log(twoSum(arr, target))
