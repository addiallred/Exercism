class Sieve
	def initialize(number)
		@max = number
	end
	def primes
		primes = []
		primes = (2..@max).to_a
			primes.each do |number|
				i = 2
				while i*number <= @max do
					primes.delete(i*number)
					i += 1
				end
			end
		primes
	end
end
module BookKeeping
	VERSION = 1
end