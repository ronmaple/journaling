//https://www.hackerrank.com/challenges/sock-merchant
function sockMerchant(n, ar) {
  const sockSet = new Set()
  let numberOfPairs = 0
  for (const sock of ar) {
    if (sockSet.has(sock)) {
      sockSet.delete(sock)
      numberOfPairs++
    } else {
      sockSet.add(sock)
    }
  }
  return numberOfPairs
}
