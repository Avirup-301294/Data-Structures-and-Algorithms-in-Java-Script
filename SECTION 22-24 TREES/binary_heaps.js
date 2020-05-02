class MaxBinaryHeap{
	constructor(){
		this.values = [];
	}

	insertMaxBinHeap(val){
		this.values.push(val);
		this.bubbleUp();
    }
    bubbleUp(){
		var elementIdx = this.values.length - 1;
		var element = this.values[elementIdx];

		while(elementIdx > 0){
		var parentIdx = Math.floor((elementIdx - 1) /2);
	    var parent = this.values[parentIdx];

	    if(element <= parentIdx) break;
       //otherwise ==> swap child with parent
	    this.values[parentIdx] = this.values[elemenIdx];
	    this.values[elementIdx] = parent;
	    elementIdx = parentIdx;//setting the element's current index
    }
  }

  extractMaxBinHeap(){
  	var max = this.values[0];
  	var end = this.values.pop();
  	if(this.values.length > 0){
  	this.values[0] = end;
  	this.sinkDown();
  }
  	return max;
  }
    sinkDown(rootIdx){
 	 	var idx = 0;
 	 	var length = this.values.length; 
 	 	var element = this.values[0];	 
 	 	
 	 	while(true){
 	 		var leftChild, rightChild;
 	 		var leftIdx = 2 * i + 1;
			var rightIdx = 2 * i + 2;
			var swap = null;	

			if(leftIdx < length){
			leftChild = this.values[leftIdx];
 	 			if(leftChild > element){
 	 			swap = leftIdx;
 	 		}

 	 		if(rightIdx < length){
 	 			rightChild = this.values[rightIdx];
 	 			if((swap === null && rightChild > element) ||
 	 		  	 	(swap !== null && rightChild > leftChild))
 	 			{
 	 			swap = rightIdx;
 	 			}
 	 	}
 	 	if(swap === null) break
 	 		this.values[idx] = this.values[swap];
 	 		this.values[swap] = element;
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);