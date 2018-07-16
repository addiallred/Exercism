var reverseString = function(string){
	let newstring = ''
	for(i = string.length-1; i >=0; i--){
		newstring += string[i];
	}
	return newstring;
}
module.exports = reverseString;