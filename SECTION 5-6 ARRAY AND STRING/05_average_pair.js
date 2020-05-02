function average_pair(arr,avg){
	if(arr.length === null) return false;
	var i = 0;
	for(let j=1;j<arr.length;j++){
		if(((arr[i] + arr[j]) / 2) === avg){
			return true;
		}else if(arr[i] + arr[j] / 2 !== avg){
			i = i + 1;
			continue;
		}
	}
	return false;
}
console.log(average_pair([1,2,3],2.5));
console.log(average_pair([-1,0,3,4,5,6],4.1));
console.log(average_pair([1,3,3,5,6,7,10,12,19],8.0));
//colts solution===

function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
