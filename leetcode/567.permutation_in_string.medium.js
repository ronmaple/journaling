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


// sliding window
// similar checking idea, different technique as above
// where we slide the window to the right if the condition is not met
// AND if the next char is present in s1Map but already exceeds the count
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

  let left = 0
  let right = 0
  let remaining = s1.length

  while (right < s2.length) {
    if (s1Map[s2[right]] > 0) {
      remaining--
    }
    s1Map[s2[right]]--
    right++

    if (remaining === 0) {
      return true
    }

    if (right - left === s1.length) {
      // slide window to the right
      if (s1Map[s2[left]] >= 0) {
        remaining++
      }
      s1Map[s2[left]]++
      left++
    }
  }

  return false
}