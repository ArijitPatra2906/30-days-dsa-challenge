// Day 10 - LeetCode 14: Longest Common Prefix
// Problem:
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Approach: Horizontal Scanning (Prefix Shrinking using indexOf)
// Time: O(S), where S is the sum of all characters in all strings
// Space: O(1)

function longestCommonPrefix(strs) {
  if (strs.length === 0) return ''
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    let currStr = strs[i]
    while (currStr.indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1)
      if (prefix === '') return ''
    }
  }

  return prefix
}

const strs = ['flower', 'flow', 'flight']
console.log(longestCommonPrefix(strs))
