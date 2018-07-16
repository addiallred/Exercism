exports.for = function(number){
		let primeFactors = []
		let start = 2;
		while(number != 1){
			if(number % start == 0){
				primeFactors.push(start);
				number = number/start;
				start--;
			}
				start++;
		}
		return primeFactors;
};