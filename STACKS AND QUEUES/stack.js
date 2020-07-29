class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class Stack{
	constructor(){
		this.first = null;
		this.last = null;
		this.size = 0;
	}
//Inserting from First (unshift)
	push(val){
		var newNode = new Node(val);
		if(!this.first){
			this.first = newNode;
			this.last = newNode;
		}else{
			var temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}
//Removing from First (shift)
	pop(){
		if(!this.first) return null;
		var temp = this.first;
		if(this.first === this.last){
            this.last = null;
        }
		this.first = this.first.next;
		this.size--;
		return temp.val;
	}
	peek() {
        return this.first;
    }
     isEmpty() {
        return this.size === 0;
    }
}

var stack = new Stack();
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);