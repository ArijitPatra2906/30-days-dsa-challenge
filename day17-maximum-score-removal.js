// Day 17 - LeetCode 1717: Maximum Score From Removing Substrings
// Given a string and two scores for removing "ab" or "ba", maximize the total score by removing these substrings.
// Approach: Greedy + Stack (Remove higher scoring pair first)
// Time: O(n), Space: O(n)

function maximumGain(s, x, y) {
  function removePair(str, firstChar, secondChar, score) {
    let stack = []
    let total = 0

    for (let ch of str) {
      if (
        stack.length &&
        stack[stack.length - 1] === firstChar &&
        ch === secondChar
      ) {
        stack.pop()
        total += score
      } else {
        stack.push(ch)
      }
    }

    return [stack.join(''), total]
  }

  let totalScore = 0

  if (x > y) {
    const [rem1, score1] = removePair(s, 'a', 'b', x)
    const [rem2, score2] = removePair(rem1, 'b', 'a', y)
    totalScore = score1 + score2
  } else {
    const [rem1, score1] = removePair(s, 'b', 'a', y)
    const [rem2, score2] = removePair(rem1, 'a', 'b', x)
    totalScore = score1 + score2
  }

  return totalScore
}

const s = 'aabbaaxybbaabb'
const x = 5
const y = 4

console.log(maximumGain(s, x, y))
