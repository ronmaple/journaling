/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const table = Array(amount + 1).fill(amount + 1)

  table[0] = 0
  for (let i = 1; i < table.length; i++) {
    // find the least coins for each amount
    for (const coin of coins) {
      if (coin <= i) {
        table[i] = Math.min(table[i], 1 + table[i - coin])
      }
    }
  }

  return table[amount] === amount + 1 ? -1 : table[amount]
}
