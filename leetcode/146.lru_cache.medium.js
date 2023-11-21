// @medium
// this was a pain in the ass. Need to do this again for practice
class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.next = null
    this.prev = null
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = {}
  this.head = null
  this.tail = null
  this.size = 0 // I previously just used Object.keys(this.cache).length but it's apparently O(n)
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key]) {
    // remove from its current position, ie if node=node2
    // node1 -> node2 -> node3 to node1 -> node3
    const { val, prev, next } = this.cache[key]
    if (prev) {
      prev.next = next
    }
    if (next) {
      next.prev = prev || next.prev
    }

    // Move the current node to the head
    if (this.tail === this.cache[key]) {
      this.tail = prev || this.cache[key]
    }
    this.cache[key].prev = null
    if (this.head !== this.cache[key]) {
      this.cache[key].next = this.head
      this.head.prev = this.cache[key]
    }
    this.head = this.cache[key]

    return val
  }

  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key]) {
    this.cache[key].val = value
    this.get(key) // rearranges to the head of the list
  } else {
    this.cache[key] = new Node(key, value)
    // this.cache[key] = {
    //   key, val: value, prev: null, next: null
    // }
    if (this.head) {
      this.head.prev = this.cache[key]
      this.cache[key].next = this.head
    }

    this.head = this.cache[key]
    if (!this.tail) {
      this.tail = this.cache[key]
    }
    this.size += 1
  }

  if (this.size > this.capacity) {
    const removedKey = this.tail.key
    // remove the tail
    if (this.tail.prev) {
      this.tail.prev.next = null
      this.tail = this.tail.prev
      // this.cache[removedKey].prev = null
    }
    delete this.cache[removedKey]
    this.size -= 1
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
