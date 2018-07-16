class Hamming
  def self.compute(string1, string2)
		raise ArgumentError.new("Not same length") unless string1.length == string2.length
		i = 0
		count = 0
		string1.length.times do |i|
			if string1[i] != string2[i]
				count += 1
			end
		end
		count
	end
end
module BookKeeping
	VERSION = 3 # Where the version number matches the one in the test.
end
