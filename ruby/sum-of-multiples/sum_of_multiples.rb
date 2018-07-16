class SumOfMultiples
	def initialize(*mult)
		@mult = mult
	end
	def to(upper_limit)
		sum = 0
		(0..upper_limit-1).each do |value|
			@mult.each do |multiple|
				if value % multiple == 0
					sum += value
				end	
				break if value % multiple == 0
			end
		end
		sum
	end
end
module BookKeeping
	VERSION = 2
end