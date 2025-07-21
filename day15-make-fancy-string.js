// Day 15 - LeetCode 1957: Delete Characters to Make Fancy String
// Given a string s, delete the minimum number of characters so that
// no three consecutive characters are the same.
// Return the resulting fancy string.
// Approach: Greedy with character comparison
// Time: O(n), Space: O(n)

function makeFancyString(s) {
  let result = []
  for (let i = 0; i < s.length; i++) {
    let n = result.length
    if (n >= 2 && result[n - 1] === s[i] && result[n - 2] === s[i]) {
      continue
    }
    result.push(s[i])
  }
  return result.join('')
}

const s = 'leeetcode'
console.log(makeFancyString(s))
