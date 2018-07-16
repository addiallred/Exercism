class Squares
	def initialize(value)
		@square = value
	end
	def sum_of_squares
		sum = 0
		for i in 1...@square+1
			sum += (i*i)
		end
		sum
	end
	def square_of_sum
		sum = 0 
		for i in 1...@square+1
			sum += i
		end
		sum*sum
	end
	def difference
		square_of_sum - sum_of_squares
	end
end
module BookKeeping
	VERSION = 4
end