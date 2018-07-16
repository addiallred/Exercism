class RunLengthEncoding
	def self.encode(string)
		prev_char = ''
		encoded = ""
		count = 1
		string.each_char do |char|
			if prev_char == char
				count += 1
			else
				if count == 1
					encoded +=  prev_char
				else
					encoded += (count.to_s + prev_char)
				end
				prev_char = char
				count = 1
			end
		end
		if count == 1
			encoded +=  prev_char
		else
			encoded += (count.to_s + prev_char)
		end
		
		encoded
	end
	def self.decode(string)
		curr_number = 1
		decode = ""
		prev = ""
		string.each_char do |char|
			if char =~ /[0-9]/
				if prev =~ /[0-9]/
					curr_number = (curr_number * 10) + (char.to_i)
				else
					curr_number = char.to_i
				end
				prev = char
			else
				(1..curr_number).each do |n|
					decode += char
				end
				curr_number = 1
				prev = char
			end
		end
		decode
	end
end