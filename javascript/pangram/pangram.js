function Pangram(phrase){
	this.phrase = phrase.toLowerCase();
	alphabet = 'abcdefghijklmnopqrstuvwxyz'
}
Pangram.prototype.isPangram = function(){
	for(i = 0; i <26; i++){
		if(this.phrase.indexOf(alphabet[i]) == -1){
			return false;
		}
	}
	return true;
}
module.exports = Pangram;