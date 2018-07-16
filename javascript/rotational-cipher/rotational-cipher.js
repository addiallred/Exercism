var RotationalCipher = function(){
	this.rotate = function(input, rotate_by){
		rotate_by = rotate_by % 26
		let result = '';
		for(i = 0; i < input.length; i++){
			if(input[i].match(/[a-z]/)){
				temp_char = String.fromCharCode(input.charCodeAt(i) + rotate_by);
				if(temp_char.match(/[a-z]/)){
					result += temp_char;
				}
				else{
					result += String.fromCharCode(temp_char.charCodeAt(0) - 122 + 96)
				}
			}
			else if(input[i].match(/[A-Z]/)){
				temp_char = String.fromCharCode(input.charCodeAt(i) + rotate_by);
				if(temp_char.match(/[A-Z]/)){
					result += temp_char;
				}
				else{
					result += String.fromCharCode(temp_char.charCodeAt(0) - 90 + 64)
				}
			}
			else{
				result += input[i];
			}
		}
		return result;
	}
};
module.exports = RotationalCipher;