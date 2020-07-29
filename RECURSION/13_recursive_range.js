//Iterative
function recursive_range(num){
	var sum =0;
	for(var i=1;i<=num;i++){
		sum += i;
	}
	return sum;
}

//Recursive

function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}