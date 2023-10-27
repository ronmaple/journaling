// Easy
// Could probably be optimized, but this is easy enough already.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  const sMap = {}
  const tMap = {}
  // get all unique characters in both strings
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]]++
    } else {
      sMap[s[i]] = 1
    }

    if (tMap[t[i]]) {
      tMap[t[i]]++
    } else {
      tMap[t[i]] = 1
    }
  }

  if (Object.keys(sMap).length !== Object.keys(tMap).length) {
    return false
  }
  // get check the count of characters
  for (const sKey of Object.keys(sMap)) {
    if (sMap[sKey] !== tMap[sKey]) {
      return false
    }
  }

  return true
};