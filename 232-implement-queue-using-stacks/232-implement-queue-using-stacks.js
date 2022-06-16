
var MyQueue = function() {
    this.stack = [];
    this.reverse = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.reverse.length) {
        this.stack.push(this.reverse.pop());
    }
    
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.stack.length) {
        this.reverse.push(this.stack.pop());
    }
    
    return this.reverse.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this.stack.length) {
        this.reverse.push(this.stack.pop())
    }
    
    if (this.reverse.length) {
        return this.reverse[this.reverse.length - 1];
    } else {
        return null;
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0 && this.reverse.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */