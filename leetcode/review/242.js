/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  const sFreq = {} // {[char]: freq}
  const tFreq = {}

  for (let i = 0; i < s.length; i++) {
    if (sFreq[s[i]] === undefined) {
      sFreq[s[i]] = 0
    }
    sFreq[s[i]]++

    if (tFreq[t[i]] === undefined) {
      tFreq[t[i]] = 0
    }
    tFreq[t[i]]++
  }

  if (Object.keys(sFreq).length !== Object.keys(tFreq).length) {
    return false
  }
  for (const sKey of Object.keys(sFreq)) {
    if (sFreq[sKey] !==  tFreq[sKey]) {
      return false
    }
    delete sFreq[sKey]
    delete tFreq[sKey]
  }
  
  return Object.keys(sFreq).length === Object.keys(tFreq).length
};
