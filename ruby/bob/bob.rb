class Bob
	def self.hey(string)
		string = string.gsub(/\s+/, "")
		if string == ''
			'Fine. Be that way!'
		elsif string.upcase == string && string[-1] == '?' && string.count("a-zA-Z") != 0
			"Calm down, I know what I'm doing!"
		elsif string.upcase == string && string.count("a-zA-Z") != 0
			'Whoa, chill out!'
		elsif string[-1] == '?'
			'Sure.'
		else
			'Whatever.'
		end
	end
end
module BookKeeping
	VERSION = 2
end