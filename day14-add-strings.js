// Day 14 - LeetCode 415: Add Strings
// Given two non-negative integers num1 and num2 represented as strings,
// return their sum as a string (without using built-in big integer libraries).
// Approach: Digit-by-digit Addition with Carry (Simulating manual addition)
// Time: O(max(n, m)), Space: O(1)

function addStrings(num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let result = ''

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0

    const sum = digit1 + digit2 + carry
    result = (sum % 10) + result
    carry = Math.floor(sum / 10)

    i--
    j--
  }

  return result
}

const num1 = '11'
const num2 = '123'
console.log(addStrings(num1, num2))
