/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const output = []

    const dfs = (idx, subset) => {
        if (idx === nums.length) {
            output.push([...subset])
            return
        }

        dfs(idx + 1, subset)
        subset.push(nums[idx])
        dfs(idx + 1, subset)
        subset.pop()
    }

    dfs(0, [])

    return output
};
