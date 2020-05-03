var numJewelsInStones = function(J, S) {
  var count = 0;
  for(var i in J){
    for(var k in S){
        if(J.charAt(i) === S.charAt(k)){
       count = count + 1;
    }
  }
 }
 return count;
};