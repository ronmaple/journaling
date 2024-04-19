/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const combinations = []

    const dfs = (combination, sum, idx) => {
        if (sum === target) {
            combinations.push([...combination])
            return
        }

        if (idx < candidates.length) {
            if (sum + candidates[idx] <= target) {
                combination.push(candidates[idx])
                dfs(combination, sum + candidates[idx], idx)
                combination.pop()
            }
            dfs(combination, sum, idx + 1)
        }
    }

    dfs([], 0, 0)

    return combinations
};
