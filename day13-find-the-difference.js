// Day 13 - LeetCode 389: Find the Difference
// Given two strings s and t where t is s with an extra character added,
// return the extra character.
// Approach: Hash Map Frequency Count
// Time: O(n), Space: O(1)

function findTheDifference(s, t) {
  const freq = {}
  for (let char of s) {
    freq[char] = (freq[char] ?? 0) + 1
  }
  for (let char of t) {
    if (!freq[char]) {
      return char
    } else {
      freq[char]--
    }
  }
}

const s = 'abcd'
const t = 'abcde'
console.log(findTheDifference(s, t))
