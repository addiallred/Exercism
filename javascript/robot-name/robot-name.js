var previousNames = new Set([]);
function Name(){
	this.name = newName();
	this.reset = function(){
		this.name = newName();
	};
};
function newName(){
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var numbers = "0123456789"
	temp = ""
	for(var i = 0; i < 5; i++){
		if(i < 2){
			temp += letters.charAt(Math.floor(Math.random() * letters.length));
		}
		else{
			temp += numbers.charAt(Math.floor(Math.random() * numbers.length));
		}
	}
	if(previousNames.has(temp)){
		newName();
	}
	previousNames.add(temp);
	return temp;
};
module.exports = Name;