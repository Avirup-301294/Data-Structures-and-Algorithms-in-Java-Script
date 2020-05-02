/* function validAnagram(str1,str2){
  // My Method

  if(str1.length !== str2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  
  for(let val=0;val<str1.length;val++){
	  var letter = str1[val];
       frequencyCounter1[letter] = ++frequencyCounter1[letter] || 1;
	
  }
  for(let val = 0;val<str2.length;val++){
	  var letter = str2[val];
       frequencyCounter2[letter] = ++frequencyCounter2[letter] || 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2); 
     var key;
     for(key in frequencyCounter1){
      if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
  
} 


console.log(validAnagram("aaz","zza"));
console.log(validAnagram(" "," "));
console.log(validAnagram("anagram","nagaram"));
console.log(validAnagram("anagrams","nagaramm"));
console.log(validAnagram("rat","car")); */

//Colt Method================================================================

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')

