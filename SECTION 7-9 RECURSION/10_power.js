function power_iterative(base,exponent){
	if(exponent === 0) return 1;
	for(var i = base, j=1;j<exponent;j++){
		base = base * i;
	}
	return base;
}

function power_recursive(base, exponent){
    if(exponent === 0) return 1;
    return base * power_recursive(base,exponent-1);
}
console.log(power_iteratve(4,4));
console.log(power_iteratve(5,3));
console.log(power_iteratve(2,5));

console.log(power_recursive(4,4));
console.log(power_recursive(5,3));
console.log(power_recursive(2,5));