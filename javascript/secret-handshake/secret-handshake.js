var SecretHandshake = function(input){
	if(isNaN(input)){
		throw Error('Handshake must be a number');
	}
	this.secret_input = (input).toString(2);
	this.options_ = ['wink', 'double blink', 'close your eyes', 'jump']
	this.commands = function(){
		this.translated = [];
		j = 0;
		for(i = (this.secret_input.length)-1; i >=0; i--){
			if(this.secret_input[i] == '1' && j != 4){
				this.translated.push(this.options_[j]);
			}
			j++;
		}
		if(this.secret_input.length == 5){
			this.translated.reverse();
		}
		return this.translated;
	}
}
module.exports = SecretHandshake;