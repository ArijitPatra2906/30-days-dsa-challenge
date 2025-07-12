// Day 6 - LeetCode 268: Missing Number
// Problem:
// You are given an array `nums` containing `n` distinct numbers
// in the range [0, n]. Return the only number in the range that is missing.
// Approach: Sum Formula
// Use expected sum of first n natural numbers and subtract actual sum
// Time: O(n), Space: O(1)

function findMissingNumber(nums) {
  let currSum = 0
  let expectedSum = (nums.length * (nums.length + 1)) / 2

  for (let num of nums) {
    currSum += num
  }

  return expectedSum - currSum
}

const nums = [3, 0, 1]
console.log(findMissingNumber(nums))
