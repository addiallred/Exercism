class Prime
	def self.nth(value)
	if value < 1 
		raise ArgumentError
	primes = []
	primes = (2..104750).to_a
	primes.each do |number|
		i = 2
		while i*number <= 10 do
			primes.delete(i*number)
			i += 1
		end
	end
	primes[value-1];
	end
end
module BookKeeping
   VERSION = 1
end