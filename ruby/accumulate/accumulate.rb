class Array
	def accumulate
		result = []
		each do |element|
			result << yield(element)
		end
		result
	end
end
module BookKeeping
	VERSION = 1
end

