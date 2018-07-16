class SumOfMultiples
	def initialize(*mult)
		@mult = mult
	end
	def to(upper_limit)
		sum = 0
		(1..num).each do |value|
			@mult.each do |multiple|
				if value % multiple == 0
					sum += value
				end	
			end
		end
	end
end
