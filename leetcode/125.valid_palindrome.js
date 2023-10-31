// @easy
// the filter was annoying. The problem itself was simple, but there's a lot of cases
var isPalindrome = function (s) {
  let forward = 0
  let backward = s.length - 1

  const filter =  /^[A-Za-z0-9]$/
  
  while (forward < backward) {
    if (!filter.test(s[forward].toLowerCase())) {
      forward++
    }
    else if (!filter.test(s[backward].toLowerCase())) {
      backward--
    }
    else {
      if (s[forward].toLowerCase() === s[backward].toLowerCase()) {
        forward++
        backward--
      } else {
        return false
      }
    }
  }

  return true
};