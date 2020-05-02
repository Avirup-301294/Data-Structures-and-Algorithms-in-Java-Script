class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // 1. traverse --> Access through the list O(N)
      traverse(){
        var current = this.head;
        while(current){
            console.log(current.val)
            current = current.next;
        }
    }
    // 2. push --> insert from end O(1) 
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // 3. Pop --> Deletion from end O(N)
    pop(){
        if(!this.head) return undefined;
       var current = this.head
       var newTail = current
        while(current.next){
            newTail = current;
            current = current.next;
        }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
              if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // 4. Shift --> Deletion from front O(1)
    shift(){
        if(!this.head) return undefined;
        var current = this.head;
        this.head = current.next;
        this.length--;
         if(this.length === 0){
            this.tail = null;
        }
        return current;
    }
    // 5. Unshift --> insert from front O(1) 
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
             newNode.next = this.head;
             this.head =  newNode;
         }

         this.length++;
         return this;
    }

    // 6.Get --> Searching O(N)
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var currentNode =  this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

     // 7. Set --> Modify at given position O(1)
    set(index, val){
         var foundNode = this.get(index);
         if(foundNode){
            foundNode.val = val;
            return true;
          }
        return false;
      }

      // 8. Insert --> insert any position O(1)
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    // 9. Remove --> Deletion at any position O(N)
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();
        var prevNode = this.get(index - 1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }

    // 10. Reverse --> Reverse the list inplace O(N)
    reverse(){
      var node = this.head;
      this.head = this.tail;
      this.tail = node;             
     // console.log(list);            
      var next;                   
      var prev = null;
      for(var i = 0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }

    // 11. print --> Print the list O(N)
    print(){
        var arr = [];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList()
list.push(11);
list.push(12);
list.push(13);
list.push(14);