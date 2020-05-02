//Iterative
function productOfArray(arr){
	var prod = 1;
	for(var i=0;i<arr.length;i++){
	prod =  prod * arr[i];
   }
   return prod;
}

// Recursive
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
console.log(productOfArray([1,2,3,4]));