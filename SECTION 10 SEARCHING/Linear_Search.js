function linearSearch(arr,num){
  for(var i=0;i<arr.length;i++){
    if(arr[i]===num){
      return i;
    }
  }
  return -1;
}
console.log(linearSerch([10,11,2,45,15,23,67],15));
console.log(linearSerch([10,11,2,45,15,23,67],19));
