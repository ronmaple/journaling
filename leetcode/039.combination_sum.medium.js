// @medium
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const output = []

  const dfs = (i, combination, total) => {
    if (total === target) {
      output.push([...combination])
      return
    }

    if (total > target || i >= candidates.length) {
      return
    }

    // 2 decisions
    // 1st: use same value until out of bounds or total = target
    combination.push(candidates[i])
    dfs(i, combination, total + candidates[i])

    // move to next value, use that value or skip
    combination.pop()
    dfs(i + 1, combination, total)
  }

  dfs(0, [], 0)

  return output
}
