// Day 3 - LeetCode 121: Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day to sell that stock in the future.
// Return the maximum profit you can achieve from this transaction. If no profit is possible, return 0.
// Approach: Sliding Window / Single Pass Optimization
// Time: O(n), Space: O(1)

const prices = [7, 1, 5, 3, 6, 4]

function maxProfit(prices) {
  let minPrice = prices[0]
  let maxProfit = 0

  for (let i = 1; i < prices.length; i++) {
    const currPrice = prices[i]
    if (currPrice < minPrice) {
      minPrice = currPrice
    } else {
      const profit = currPrice - minPrice
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
  }

  return maxProfit
}

console.log(maxProfit(prices))
