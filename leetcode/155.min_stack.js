// @medium
var MinStack = function() {
  this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  let min = val
  if (this.stack.length > 0) {
    min = Math.min(min, this.stack[this.stack.length - 1].min)
  }
  this.stack[this.stack.length] = {
    val,
    min
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  if (this.stack.length === 0) {
    return null
  }
  return this.stack[this.stack.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length === 0) {
    return null
  }
  return this.stack[this.stack.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.stack.length === 0) {
    return null
  }
  return this.stack[this.stack.length - 1].min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */