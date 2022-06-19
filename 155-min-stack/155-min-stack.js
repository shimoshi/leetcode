
var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    if (this.min.length && val <= this.min[this.min.length - 1]) {
        this.min.push(val);
    } 
    
    if (!this.min.length) {
        this.min.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let result = this.stack.pop();
    
    if (this.min.length && result === this.min[this.min.length - 1]) {
        this.min.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.min.length) {
        return this.min[this.min.length - 1];
    } else {
        return null;
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */