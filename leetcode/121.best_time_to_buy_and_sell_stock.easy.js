// @easy
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let slow = 0
  let fast = slow + 1
  let absMax = 0

  while (slow < fast && fast < prices.length) {
    absMax = Math.max(prices[fast] - prices[slow], absMax)
    if (prices[slow] > prices[fast]) {
      slow = fast
      fast++
    } else {
      fast++
    }
  }

  return absMax
};