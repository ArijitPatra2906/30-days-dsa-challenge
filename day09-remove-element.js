// Day 9 - LeetCode 27: Remove Element
// Problem:
// Given an array `nums` and a value `val`, remove all instances of `val` in-place.
// Return the new length `k` after removal. The first `k` elements of `nums` must be the result.
// Order of elements can change. Do not allocate extra space for another array.
// Time: O(n), Space: O(1)

function removeElement(nums, val) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
}

const nums = [3, 2, 2, 3]
const val = 3
console.log(removeElement(nums, val))
