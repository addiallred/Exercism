class Grains
	def self.square(tile_number)
		raise ArgumentError unless tile_number > 0 && tile_number < 65
		return 2**(tile_number-1)
	end
	def self.total
		sum = 0
		(1..64).each do |i|
			sum += 2**(i - 1)
		end
		sum
	end
end
module BookKeeping
	VERSION = 1
end