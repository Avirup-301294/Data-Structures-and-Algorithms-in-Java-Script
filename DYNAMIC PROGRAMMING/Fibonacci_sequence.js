function fibonacci_naive_recursive(num){
	if(num <= 2) return 1;
	return fibonacci_naive_recursive(num-1) + fibonacci_naive_recursive(num-2);
}

function fibonacci_memoization(num,memo=[]){
	if(memo[num] !== undefined) return memo[num];
	if(num <= 2) return 1;
	var res =  fibonacci_memoization(num-1,memo) + fibonacci_memoization(num-2,memo);
	memo[num] = res;
	return res;
}

function fibonacci_tabularization(num){
	if(num <= 2) return 1;
	var fibo = [0,1,1];
	for(var i=3;i<=num;i++){
	 fibo[i] =  fibo[i-1] + fibo[i-2];
	}
	return fibo[num];
}

console.log(fibonacci_naive_recursive(7));
console.log(fibonacci_memoization(7));
console.log(fibonacci_tabularization(7));