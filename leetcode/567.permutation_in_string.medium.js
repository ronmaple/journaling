// @medium
// This is very slow. More of a brute force solution.
// because the loop repeats for every character in s2
var checkInclusion = function (s1, s2) {
  const s1Map = {}
  for (let i = 0; i < s1.length; i++) {
    const l = s1[i]
    if (s1Map[l]) {
      s1Map[l]++
    } else {
      s1Map[l] = 1
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const newMap = { ...s1Map }
    let j = i
    while (j < s2.length && newMap[s2[j]]) {
      newMap[s2[j]]--
      j++
    }
    if (Object.values(newMap).every((x) => x === 0 || x === NaN)) {
      return true
    }
  }
  return false
}
