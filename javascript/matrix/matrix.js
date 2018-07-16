var Matrix = function (string) {
	this.rows = [];
	let values = string.split("\n")
	for(i = 0; i < values.length; i++){
		this.rows.push((values[i].split(" ")).map(Number));
	}
	this.columns = [];
	for(i = 0; i < this.rows.length; i++){
		temp = [];
		for(j = 0; j < this.rows.length; j++){
			temp.push(this.rows[j][i]);
		}
		this.columns[i] = temp;
	}	
};
module.exports = Matrix;