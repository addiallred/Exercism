function Gigasecond(DOB){
	this.DOB = DOB;
	this.date = function(){
		return new Date(this.DOB.getTime() + 1000000000000);
	}
}
module.exports = Gigasecond;