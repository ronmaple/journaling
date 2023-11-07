// @easy
// UPPER ASCII = 65 to 90
// lower case value = ASCII + 32
var toLowerCase = function(s) {
  let lowercase = ''
  for (const char of s) {
    const code = char.charCodeAt()
    if (code >= 65 && code <= 90) {
      lowercase += String.fromCharCode(code + 32)
    } else {
      // already lowercased
      lowercase += char
    }
  }

  return lowercase
};