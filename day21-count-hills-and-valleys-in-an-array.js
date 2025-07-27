// Day 21 - LeetCode 2210: Count Hills and Valleys in an Array
// Count how many indices form a hill or a valley after removing adjacent duplicates
// Approach: Clean list + Pattern check
// Time: O(n), Space: O(n)

function countHillValley(nums) {
  const arr = [nums[0]]

  // Remove adjacent duplicates
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      arr.push(nums[i])
    }
  }

  let count = 0

  // Check for hills and valleys
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) count++ // Hill
    else if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) count++ // Valley
  }

  return count
}

const nums = [6, 6, 5, 5, 4, 1]
console.log(countHillValley(nums))
