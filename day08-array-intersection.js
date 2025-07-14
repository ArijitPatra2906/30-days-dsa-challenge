// Day 8 - LeetCode 349: Intersection of Two Arrays
// Problem:
// Given two integer arrays `nums1` and `nums2`, return an array of their intersection.
// Each element in the result must be unique, and you may return the result in any order.
// Approach: Hash Set Intersection
// Time: O(n + m), Space: O(n + m)

function intersection(nums1, nums2) {
  const setNums1 = new Set(nums1)
  const setNums2 = new Set(nums2)
  const result = []

  for (let num of setNums1) {
    if (setNums2.has(num)) {
      result.push(num)
    }
  }

  return result
}

const nums1 = [4, 9, 5]
const nums2 = [9, 4, 9, 8, 4]
console.log(intersection(nums1, nums2))
