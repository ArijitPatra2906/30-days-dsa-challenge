// Day 7 - LeetCode 1394: Find Lucky Integer in an Array
// Problem:
// Given an array of integers `arr`, a lucky integer is one where
// the value equals its frequency. Return the largest lucky integer.
// If no lucky number exists, return -1.
// Time: O(n), Space: O(n)

function findLuckyNumber(nums) {
  let freq = {}
  for (let num of nums) {
    freq[num] = (freq[num] ?? 0) + 1
  }
  let luckyNum = -1
  for (let num in freq) {
    if (parseInt(num) === freq[num]) {
      luckyNum = parseInt(num)
    }
  }
  return lucky
}

const nums = [1, 2, 2, 3, 3, 3]
console.log(findLuckyNumber(nums))
