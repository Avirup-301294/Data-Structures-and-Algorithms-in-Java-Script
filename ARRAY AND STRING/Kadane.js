//Kandane's Algorithm - Two Pointers Approach =======================
function kadane(arr,n) {
     var max_so_far = arr[0];
     var curr_max = arr[0];
     for (var i = 1; i < n; i++) {
     curr_max = Math.max(arr[i], curr_max+arr[i]);
     max_so_far = Math.max(max_so_far, curr_max);
    }
   return max_so_far;
}

console.log(kadane([1,2,3,-2,5],5));
