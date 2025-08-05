// Day 30 - LeetCode 3477: Number of Unplaced Fruits
// Place each fruit into a suitable basket if possible
// Approach: Greedy with used-array tracking
// Time: O(n * m), Space: O(m)

function numOfUnplacedFruits(fruits, baskets) {
  let used = Array(baskets.length).fill(false)
  let unplaced = 0

  for (let i = 0; i < fruits.length; i++) {
    let placed = false
    for (let j = 0; j < baskets.length; j++) {
      if (!used[j] && baskets[j] >= fruits[i]) {
        used[j] = true
        placed = true
        break
      }
    }
    if (!placed) unplaced++
  }

  return unplaced
}

const fruits = [4, 2, 5]
const baskets = [3, 5, 4]

console.log(numOfUnplacedFruits(fruits, baskets))
