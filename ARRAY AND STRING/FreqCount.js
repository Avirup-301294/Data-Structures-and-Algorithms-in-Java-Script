//Naive solution================================

function freqCount(arr1,arr2){
	if(arr1.length !== arr2.length){
        return false;
    }
    for(var i=0;i<arr1.length;i++){
    	let correctIndex = arr2.indexOf(arr1[i] ** 2)
    	if(correctIndex === -1) return false;
    	arr2.splice(correctIndex,1);
    }
return true;
}

//Optimal Solution=================================
function freqCount(arr1,arr2){
if(arr1.length !== arr2.length){
        return false;
    }
var freqCount1 = {}
var freqCount2 = {}
for(key of arr1){
	freqCount1[key] = (freqCount1[key] || 0 ) + 1;
}
for(key of arr2){
	freqCount2[key] = (freqCount2[key] || 0 ) + 1;
}

for(var key in freqCount1){
	if(!(key**2 in freqCount2))
	{
		return false;
	}
	if(freqCount2[key**2] !== freqCount1[key])
	{
		return false;
	}
}
	return true;
}
console.log(freqCount([1,2,3,2],[4,4,1,9]));//true
console.log(freqCount([1,2,3],[1,9]));//false