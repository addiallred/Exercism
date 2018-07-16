class Pangram
	def self.pangram?(phrase)
		lower_phrase = phrase.downcase
		('a'..'z').all?{|letter| lower_phrase.include?(letter)}
	end
end
module BookKeeping
	VERSION = 6
end
