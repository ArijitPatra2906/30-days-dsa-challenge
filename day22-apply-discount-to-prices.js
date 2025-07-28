// Day 22 - LeetCode 2288: Apply Discount to Prices
// Apply percentage discount to valid dollar prices in a sentence
// Approach: String Parsing + Validation + Mapping
// Time: O(n * m), Space: O(n)

function discountPrices(sentence, discount) {
  function calculateDiscount(amount, discount) {
    return (amount * (1 - discount / 100)).toFixed(2)
  }

  return sentence
    .split(' ')
    .map((word) => {
      if (
        word[0] === '$' &&
        word.length > 1 &&
        [...word.slice(1)].every((c) => c >= '0' && c <= '9')
      ) {
        const amount = Number(word.slice(1))
        return `$${calculateDiscount(amount, discount)}`
      }
      return word
    })
    .join(' ')
}

const sentence = '1 2 $3 4 $5 $6 7 8$ $9 $10$'
const discount = 100
console.log(discountPrices(sentence, discount))
