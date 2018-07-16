class Raindrops
	def self.convert(number)
		raindrop = ''
		raindrop += 'Pling' if number % 3 == 0
		raindrop += 'Plang' if number % 5 == 0
		raindrop += 'Plong' if number % 7 == 0
		raindrop += (number.to_s) if raindrop == ''
		raindrop
	end
end
module BookKeeping
	VERSION = 3
end