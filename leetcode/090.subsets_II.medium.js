// @medium
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort()
  const results = []

  const set = {}
  let subset = []

  const dfs = (i) => {
    if (i >= nums.length) {
      if (!set[subset]) {
        set[subset] = true
        results.push([...subset])
      }
      return
    }

    subset.push(nums[i])
    dfs(i + 1)

    subset.pop()
    dfs(i + 1)
  }

  dfs(0)

  return results
}
