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
