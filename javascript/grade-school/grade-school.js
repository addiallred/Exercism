var School = function(){
	this.school_roster = {};
	this.roster = function(){
		return this.school_roster;
	}
	this.add = function(name, grade){
		try{
			this.school_roster[grade].push(name);
		}
		catch(err){
			this.school_roster[grade] = [name];
		}
		this.school_roster[grade].sort();
	}
	this.grade = function(grade_number){
		if(this.school_roster[grade_number]){
			return this.school_roster[grade_number];
		}
		return [];
	}
};
module.exports = School;