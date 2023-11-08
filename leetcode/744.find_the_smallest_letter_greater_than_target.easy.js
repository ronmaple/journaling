// @easy
// O(log n) binary search, space O(1)
var nextGreatestLetter = function(letters, target) {
  let forward = 0
  let backward = letters.length - 1

  while (forward <= backward) {
    let mid = Math.floor((backward + forward)/2)

    if (target < letters[mid]) {
      backward = mid - 1
    } else {
      forward = mid + 1
    }
  }

  return letters[forward] || letters[0]
};