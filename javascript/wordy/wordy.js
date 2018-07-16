var WordProblem = function(question){
	this.question = question.substring(8, question.length);
	this.operators = {"plus": function(x,y){return x + y}, "minus": function(x,y){return(x-y)} ,"multiplied": 
	function(x,y){return x*y}, "divided": function(x,y){return(x/y)}};
}
WordProblem.prototype.answer = function(){
    var cur_numbers = "";
	var answer = 0;
	var char_index = 0;
	var operation = "";
	while(char_index != this.question.length){
		if(this.question[char_index].match(/[a-zA-Z]/i)){
			operation += this.question[char_index];
		}
		else if(this.question[char_index] != " "){
			cur_numbers += this.question[char_index];
		}
		else if(operation != "" && (cur_numbers !="" || answer != 0)){
			if(operation == "divided" || operation == "multiplied"){
				char_index += 3;
			}
			char_index +=1;
			var temp = Number(cur_numbers);
			if(cur_numbers == ""){
				temp = answer;
			}
			cur_numbers = "";
			while(this.question[char_index] != " " && this.question[char_index] != "?"){
				cur_numbers += this.question[char_index];
				char_index +=1;
			}
			answer = this.operators[operation](temp, Number(cur_numbers));
			operation = "";
			cur_numbers = "";
		}
		char_index += 1;
	}
	if(answer == 0){
		throw new ArgumentError();
	}
	return answer;
}
var ArgumentError = function() {}
module.exports = {
	ArgumentError: ArgumentError,
	WordProblem: WordProblem,
	
}