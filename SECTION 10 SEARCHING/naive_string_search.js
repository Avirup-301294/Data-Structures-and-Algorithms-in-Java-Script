function naiveStringSearch(str1,str2){
  var count = 0;
  for(var i=0;i<str1.length;i++){
    for(var j=0;j<str2.length;j++){
      if(str1[i] !== str2[i+j]) break;
      if(i === str2.length - 1){
      count += 1;
    }
  }
  return count;
}
