/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const mins = Array(cost.length).fill(Number.MIN_SAFE_INTEGER)
  mins[0] = cost[0]
  mins[1] = cost[1]
  for (let i = 2; i < cost.length; i++) {
    mins[i] = cost[i] + Math.min(mins[i - 1], mins[i - 2])
  }
  return Math.min(mins[cost.length - 1], mins[cost.length - 2])
}
