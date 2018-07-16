function Binary(binary){
	this.binary = binary;
	if(binary.match(/[a-z]/i) || binary.match(/[2-9]/i)){
		this.binary = 0;
	}
	this.toDecimal = function(){
		return parseInt((this.binary +'').replace(/[^01]/gi, ''),2);
	}
};
module.exports = Binary;