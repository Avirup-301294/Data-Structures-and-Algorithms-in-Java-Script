/**
 * Initialize your data structure here.
 */
// var MyStack = function() {
//     this.pushQ = new Queue();
//     this.shiftQ = new Queue();
// };
 var MyStack = function() {
    this.pushQ = new Queue();
    this.shiftQ = new Queue();
}
/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.shiftQ.enqueue(x);
    while(!this.pushQ.isEmpty()) {
        this.shiftQ.enqueue(this.pushQ.dequeue())
    }
    
    let temp = this.shiftQ;
    this.shiftQ = this.pushQ;
    this.pushQ = temp;

};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.pushQ.dequeue();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.pushQ.peek();
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
     return this.pushQ.isEmpty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

 class Queue {
    constructor() {
        this.storage = {};
        this.last = 0;
        this.first = 0;
    }
    
    peek() {
        return this.storage[this.first];
    }
    
    size() {
        return this.last -this.first;
    }
    
    isEmpty() {
        return this.last === this.first;
    }
    
    dequeue() {
        let first = this.storage[this.first];
        delete this.storage[this.first];
        this.first++;
        return first;
    }
    
    enqueue(val) {
        this.storage[this.last] = val;
        this.last++;
    }
}
var suq = new MyStack();
suq.push(23);
suq.push(33);
suq.push(43);
suq.push(54);
suq.push(75);
console.log(suq.pop());
console.log(suq.pop());
console.log(suq.pop());
console.log(suq.pop());
console.log(suq.pop());