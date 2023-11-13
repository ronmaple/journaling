// @medium
// 301 ms - 98.84%, 97.26 mb 97.04%
// solved most of this quickly.
// main issue was on storing the closest value (1/49 test case failed)
// which I needed a hint on
var TimeMap = function () {
  /**
  map = {
    [key]: {
      // same insertion order
      values: [],
      timestamps: []
    }
  }
   */
  this.map = {}
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) {
    this.map[key] = {
      values: [],
      timestamps: [],
    }
  }
  // this assumes timestamp is in correct order
  this.map[key].values.push(value)
  this.map[key].timestamps.push(timestamp)
  return null
}

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let value = ''
  if (this.map[key] && this.map[key].values.length) {
    const store = this.map[key]
    let left = 0
    let right = store.values.length - 1
    let mid = Math.floor((left + right) / 2)
    while (left <= right) {
      mid = Math.floor((left + right) / 2)
      if (store.timestamps[mid] === timestamp) {
        return store.values[mid]
      }
      if (store.timestamps[mid] < timestamp) {
        value = store.values[mid] // store the last known closest value
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return value || ''
}
