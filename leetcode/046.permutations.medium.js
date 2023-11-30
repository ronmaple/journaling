// @medium
const permute = (nums) => {
  const results = []

  const dfs = (permutation, choices, seen) => {
    if (permutation.length === nums.length) {
      results.push(Array.from(permutation))
      return
    }

    for (let i = 0; i < choices.length; i++) {
      if (seen.has(choices[i])) continue

      seen.add(choices[i])
      permutation.push(choices[i])
      dfs(permutation, choices, seen)
      permutation.pop()
      seen.delete(choices[i])
    }
  }

  dfs([], nums, new Set())
  return results
}
