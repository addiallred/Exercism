var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
	//if who is undefined
	if(who == undefined)
	{
		return "One for you, one for me."
	}
	//if who has a name and is defined
	else
	{
		return  "One for " + who + ", one for me."
	}
};

module.exports = TwoFer;
