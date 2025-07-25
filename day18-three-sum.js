// Day 18 - LeetCode 15: 3Sum
// Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that
// i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Approach: Sorting + Two Pointers
// Time: O(n^2), Space: O(1) (excluding result storage)

function threeSome(nums) {
  nums.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let [left, right] = [i + 1, nums.length - 1]

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        result.push([nums[i], nums[left++], nums[right--]])
        while (nums[left] === nums[left - 1]) left++
        while (nums[right] === nums[right + 1]) right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return result
}

const nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSome(nums))
