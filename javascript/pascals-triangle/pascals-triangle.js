var Triangle = function(rows){
	this.rows = [[1]];
	for(i = 1; i <rows; i++){
		temp = [1]
		for(j = 1; j < i; j++){
			temp.push(this.rows[i-1][j-1] + this.rows[i-1][j]);
		}
		temp.push(1);
		this.rows.push(temp);
	}
	this.lastRow = this.rows[rows-1]
}
module.exports = Triangle;