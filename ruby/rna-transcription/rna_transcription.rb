class Complement
	def self.of_dna(dna)
		transcription = ''
		corresponding_letters = {'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U'} 
		dna.each_char { |chr| 
		return '' if corresponding_letters[chr].nil?
		transcription += corresponding_letters[chr] }
		transcription
	end
end
module BookKeeping
	VERSION = 4 # Where the version number matches the one in the test.
end