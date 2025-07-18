// Day 12 - LeetCode 448: Find All Numbers Disappeared in an Array
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array),
// some elements appear twice and others appear once.
// Find all the elements of [1, n] inclusive that do not appear in the array.
// Approach: HashSet Lookup
// Time: O(n), Space: O(n)

function findDisappearedNumbers(nums) {
  const numSet = new Set(nums)
  const result = []

  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      result.push(i)
    }
  }

  return result
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(nums))
