//Frequency counter=====
function sameFrequency(a,b){
    var StringA = a.toString();
	  var StringB = b.toString(); 

	if(StringA.length !== StringB.length){
		return false;
}
 var frequencyCount1 = {};
 var frequencyCount2 = {};

for(var i=0;i<StringA.length;i++){
  frequencyCount1[StringA[i]] = ++frequencyCount1[StringA[i]] || 1;
}
  for(var i=0;i<StringB.length;i++){
  frequencyCount2[StringB[i]] = ++frequencyCount2[StringB[i]] || 1;
}

     console.log(frequencyCount1);
     console.log(frequencyCount2);
for(val in frequencyCount1){
  if(frequencyCount2[val] !== frequencyCount1[val]){
  return false;
   }
return true;
}
}

console.log(sameFrequency(188,881));
console.log(sameFrequency(34,14));
