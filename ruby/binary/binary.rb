class Binary
	def self.to_decimal(number)
		if number.delete('01') != ''
			raise new ArgumentError
		end
		total = 0;
		(0..number.length-1).each do |n|
			if number[n] == '1'
				total += 2**(number.length-1 -n)
			end
		end
		total.to_s
		total
	end
end
module BookKeeping
	VERSION = 3
end