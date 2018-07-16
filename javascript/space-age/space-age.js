function SpaceAge(seconds){
	this.seconds = seconds;
	this.onEarth = function(){
		return Number((this.seconds/31557600).toFixed(2));
	}
	this.onMercury = function(){
		return Number((this.onEarth()/0.2408467).toFixed(2));
	}
	this.onVenus = function(){
		return Number((this.onEarth()/0.61519726).toFixed(2));
	}
	this.onMars = function(){
		return Number((this.onEarth()/1.8808158).toFixed(2));
	}
	this.onJupiter = function(){
		return Number((this.onEarth()/11.862615).toFixed(2));
	}
	this.onSaturn = function(){
		return Number((this.onEarth()/29.447498).toFixed(2));
	}
	this.onUranus = function(){
		return Number((this.onEarth()/84.016846).toFixed(2));
	}
	this.onNeptune = function(){
		return Number((this.onEarth()/164.79132).toFixed(2));
	}
};
module.exports = SpaceAge;