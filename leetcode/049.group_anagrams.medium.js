// @medium
// This could be better
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const output = [[]]
  const anagramMap = {} // {[unique]: position}

  let i = 0
  while (strs.length) {
    const str = strs.pop()
    const uniques = str
      .split('')
      .sort((a,b) => b.localeCompare(a))
      .join('')
    
    if (anagramMap[uniques] !== undefined) {
      const position = anagramMap[uniques]
      output[position].push(str)
    } else {
      anagramMap[uniques] = i
      output[i] = [str]
      i++
    }
  }

  return output
};


// other solution: character frequency
var groupAnagrams = function (strs) {
  const anagrams = {}

  for (const str of strs) {
    let count = new Array(26).fill(0)
    for (const char of str) {
      count[char.charCodeAt() - 97]++
    }
    count = count.join(',') // to distinguish a combination like [0, 1, 0] from [0, 10, 0]
    if (!anagrams[count]) {
      anagrams[count] = []
    }
    anagrams[count].push(str)
  }

  return Object.values(anagrams)
}
