var containsDuplicate = function (nums) {
  const set = {}
  for (const n of nums) {
    if (set[n]) {
      return true
    }
    set[n] = 1
  }
  return false
}
