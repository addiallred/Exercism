var Bob = function() {
  this.hey = function(string) {
		string = string.trim();
		if(string == ''){
			return 'Fine. Be that way!';
		} else if(string.slice(-1) == '?' && (string.toUpperCase() != string)){
			return 'Sure.';
		} else if(string.slice(-1) == '?' && /[^a-z]*$/.test(string)){
			return "Calm down, I know what I'm doing!";
		}else if(string.toUpperCase() == string){
			return 'Whoa, chill out!';
		} else{
			return 'Whatever.';
		}
  };
};
module.exports = Bob;