/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const output = []

  const subset = []

  const dfs = (i) => {
    if (i >= nums.length) {
      output.push([...subset])
      return
    }

    subset.push(nums[i])
    dfs(i + 1)

    subset.pop()
    dfs(i + 1)
  }

  dfs(0)
  return output
}

// Decision tree consisting of 2 decisions per node:
// 1st is to not use n -> []
// 2nd is to use n -> [n]
