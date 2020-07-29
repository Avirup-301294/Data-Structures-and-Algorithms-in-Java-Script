//Multiple pointers =====
function countUniqueValues(arr){
  if(arr.length === 0) return 0;
 for(var i = 0,j=1;j<arr.length;j++){
		 if(arr[i] !== arr[j]){
		     i++;
			arr[i] = arr[j];
		 }
	 }
	 return i+1;
}
console.log(countUniqueValues([1,2,3,4,4,5,6,7,7,10,12,13]));