function isPallindrome(str){
	var flag = true;
	var len = str.length;
	if((str.length) % 2 === 0){
		//console.log(str.length);
	   for(var i=0;i< (str.length/2);i++){
		  if(str[i]!==str[len-i-1]){
		  	flag = false;
		  	break;
		  } else { 
		  flag = true;
		  }		
    }
  } else {
  	  for(var j = 0;j< Math.ceil(str.length/2);j++){
  		 if(str[j] !== str[len-j-1]){
  		 	flag = false;
  		 	break;
  		 } else{
  	   		flag = true;
  	  }
  	}
  }
  if(flag === true) {
  	return true;
  }else{
  return false;
  }
}

// console.log(isPallindrome("abccba")); //true
// console.log(isPallindrome("abcba")); //true
// console.log(isPallindrome("abcdba")); //false
// console.log(isPallindrome("abdba")); //true

// function isPalindrome_Recursive(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//     return false;
// }
console.log(isPallindrome('awesome')); // false
console.log(isPallindrome('foobar')); // false
console.log(isPallindrome('tacocat')); // true
console.log(isPallindrome('amanaplanacanalpanama')); // true
console.log(isPallindrome('amanaplanacanalpandemonium')); // false