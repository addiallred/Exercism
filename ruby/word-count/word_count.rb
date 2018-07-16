class Phrase
	def initialize(phrase)
		@phrase = phrase.downcase.gsub /\W/, ' '
	end
	def word_count
		words = @phrase.split(' ')
		word_count_hash = Hash.new(0)
		words.each do |word|
			word_count_hash[word] += 1
		end
		word_count_hash
	end
end
module BookKeeping
	VERSION = 1
end