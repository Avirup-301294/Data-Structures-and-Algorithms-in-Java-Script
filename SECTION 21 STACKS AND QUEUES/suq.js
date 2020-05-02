class MyStack {
	constructor(){
    this.pushQ = new Queue();
    this.shiftQ = new Queue();
}

  push(x) {
    this.shiftQ.enqueue(x);
    while(!this.pushQ.isEmpty()) {
        this.shiftQ.enqueue(this.pushQ.dequeue())
    }
    
    let temp = this.shiftQ;
    this.shiftQ = this.pushQ;
    this.pushQ = temp;

}

 pop() {
    return this.pushQ.dequeue();
}


 top() {
    return this.pushQ.peek();
}

 empty() {
     return this.pushQ.isEmpty();
  }
}


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
suq.push(11);
suq.push(12);
suq.push(13);
suq.push(14);
suq.push(15);
console.log(suq.pop());
console.log(suq.pop());
console.log(suq.pop());
console.log(suq.pop());
console.log(suq.pop());