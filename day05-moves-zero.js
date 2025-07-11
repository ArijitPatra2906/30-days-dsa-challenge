// Day 5 - LeetCode 283: Move Zeroes
// Problem:
// Given an integer array `nums`, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// Do this in-place without making a copy of the array.
// Approach: Two Pointers
// Time: O(n), Space: O(1)

function movesZero(nums) {
  let lastNonZeroIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIndex] = nums[i]
      lastNonZeroIndex++
    }
  }
  for (let j = lastNonZeroIndex; j < nums.length; j++) {
    nums[j] = 0
  }
  return nums
}

const nums = [1, 4, 0, 3, 12]
console.log(movesZero(nums))
