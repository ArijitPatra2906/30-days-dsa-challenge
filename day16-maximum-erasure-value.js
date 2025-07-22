// Day 16 - LeetCode 1695: Maximum Erasure Value
// Given an array of positive integers, find the maximum sum of a subarray
// containing only unique elements.
// Approach: Two Pointer Sliding Window + HashSet
// Time: O(n), Space: O(n)

function maximumUniqueSubarray(nums) {
  const set = new Set()
  let i = 0
  let sum = 0
  let max = 0

  for (let j = 0; j < nums.length; j++) {
    while (set.has(nums[j])) {
      set.delete(nums[i])
      sum -= nums[i]
      i++
    }

    set.add(nums[j])
    sum += nums[j]
    max = Math.max(max, sum)
  }

  return max
}

const nums = [5, 2, 1, 2, 5, 2, 1, 2, 5]
console.log(maximumUniqueSubarray(nums))
