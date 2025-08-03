// Day 28 - LeetCode 3: Longest Substring Without Repeating Characters
// Find the length of the longest substring without repeating characters
// Approach: Sliding Window + HashSet
// Time: O(n), Space: O(n)

function lengthOfLongestSubstring(s) {
  let set = new Set()
  let left = 0,
    maxLen = 0

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    maxLen = Math.max(maxLen, right - left + 1)
  }

  return maxLen
}

const s = 'abcabcbb'
console.log(lengthOfLongestSubstring(s))
