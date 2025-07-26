// Day 20 - LeetCode 3046: Split the Array into Equal Pairs
// Given an array of integers, check if it can be split into pairs with equal values.
// Approach: Frequency Count using Hash Map
// Time: O(n), Space: O(n)

function isPossibleToSplit(nums) {
  let freq = {}
  for (let i = 0; i < nums.length; i++) {
    freq[nums[i]] = (freq[nums[i]] ?? 0) + 1
  }

  for (let key in freq) {
    if (freq[key] > 2) {
      return false
    }
  }

  return true
}

const nums = [1, 1, 2, 2, 3, 4]
console.log(isPossibleToSplit(nums))
