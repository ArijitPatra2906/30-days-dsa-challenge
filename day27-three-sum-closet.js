// Day 27 - LeetCode 16: 3Sum Closest
// Find three integers in nums such that the sum is closest to target
// Approach: Sort + Two Pointers
// Time: O(n^2), Space: O(1)

function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b)
  let closest = nums[0] + nums[1] + nums[2]

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum
      }
      if (sum < target) {
        left++
      } else {
        right--
      }
    }
  }
  return closest
}

const nums = [-1, 2, 1, -4]
const target = 1
console.log(threeSumClosest(nums, target))
