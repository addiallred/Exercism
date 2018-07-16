class RunLengthEncoding
	def self.encode(string)
		prev_char = ''
		encoded = ""
		count = 0
		string.each_char do |char|
			if prev_char == char
				count += 1
			else
				encoded += count + prev_char
				prev_char = char
				count = 0
			end
		end
	end
end