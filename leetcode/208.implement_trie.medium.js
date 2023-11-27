class TrieNode {
  constructor(char) {
    this.key = char ?? char
    this.parent = null
    this.children = {}
    this.end = false
  }
}

var Trie = function () {
  this.root = new TrieNode()
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root

  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    if (!node.children[char]) {
      node.children[char] = new TrieNode(char)
      node.children[char].parent = node
    }

    // move to the next pointer
    node = node.children[char]
    if (i + 1 === word.length) {
      node.end = true
    }
  }
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root
  for (let char of word) {
    if (!node.children[char]) {
      return false
    }
    node = node.children[char]
  }
  // is it a full word -- check node.end on insert
  return node.end
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root
  for (let char of prefix) {
    if (!node.children[char]) {
      return false
    }
    node = node.children[char]
  }

  return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
