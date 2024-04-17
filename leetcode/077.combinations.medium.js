// very slow but solved it
var combine = function (n, k) {
  const combinations = []
  const seen = {}

  const dfs = (i, combination) => {
    if (combination.length === k && !seen[combination]) {
      combinations.push(combination)
      seen[combination] = true
      return
    }

    if (i <= n) {
      combination.push(i)
      dfs(i + 1, [...combination])
      combination.pop()
      dfs(i + 1, [...combination])
    }
  }

  for (let i = 1; i <= n; i++) {
    dfs(i, [])
  }

  return combinations
}
