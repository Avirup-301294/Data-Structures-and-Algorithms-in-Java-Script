// Multiple Pointers=========================== Time Complexity and Space Complexity O(n) 

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
console.log(areThereDuplicates(5,4,3,2,1,1)); 
console.log(areThereDuplicates('a','b','c','d','y')); 

//Multiple pointers=================================== Time Complexity and Space Complexity O(n) 
function areThereDuplicates(...args) {
   args.sort(function(a, b){
    if (typeof a === 'number'){
      return a - b;
    } else {
      return a.charCodeAt(0) - b.charCodeAt(0)
    } 
  })
  var i=0,count=0;
  for (var j = 1; j < arguments.length; j++) {
    if(arguments[i] === arguments[j]){
     return true;
    }
     i++;
  }
 
  return false;
 
}
areThereDuplicates(5,4,3,2,1,1); 
areThereDuplicates('a','b','c','d','y','y','t','t');

//Frequency Counter=================================== Time Complexity and Space Complexity O(n) 
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1){
		return true
    }
  }
  return false;
}
console.log(areThereDuplicates(5,4,3,2,1,1)); 
console.log(areThereDuplicates('a','b','c','d','y')); 

// Linear Complexity ===================================== Time Complexity O(nlog(n)) and Space Complexity O(1) 
 function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}