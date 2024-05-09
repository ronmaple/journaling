/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const frequencies = {}
  for (let i = 0; i < strs.length; i++) {
    const freqKey = getSortedCharFrequencyKey(strs[i])
    if (frequencies[freqKey]) {
      frequencies[freqKey].push(strs[i])
    } else {
      frequencies[freqKey] = []
      frequencies[freqKey].push(strs[i])
    }
  }

  return Object.keys(frequencies).map((k) => frequencies[k])
};

const getSortedCharFrequencyKey = (str) => {
  const freq = {}
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === undefined) {
      freq[str[i]] = 0
    } 
    freq[str[i]]++
  }

  let key = ''
  const keys = Object.keys(freq).sort()
  for (let k of keys) {
    key += `${k}${freq[k]}`
  }

  return key
}
