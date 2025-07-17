// Day 11 - LeetCode 205: Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// No two characters may map to the same character, but a character may map to itself.
// Approach: Pattern Encoding (Index Mapping)
// Time: O(n), Space: O(n)

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false

  const encode = (str) => {
    const map = {}
    return [...str]
      .map((char, index) => {
        if (!(char in map)) map[char] = index
        return map[char]
      })
      .join('-')
  }

  return encode(s) === encode(t)
}

const s = 'egg'
const t = 'add'
console.log(isIsomorphic(s, t))
