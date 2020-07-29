function binarySearch(arr,val){
  var left = 0;
  var right = arr.length - 1;
  var mid = Math.floor((left + right) / 2);
  while(arr[mid] !== val && left <= right){
    if(val > arr[mid]) left = mid + 1;
    else right = mid - 1;
    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === val ? mid : -1;
}
console.log(binarySearch([1,23,45,56,76],56));
console.log(binarySearch([1,23,45,66,76],56));
