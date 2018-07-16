module BookKeeping
  VERSION = 2
end
class Fixnum
  def to_roman
    roman_translation = { 1000 => 'M',                     
                          900 => 'CM',
                          500 => 'D',
                          400 => 'CD',
                          100 => 'C',
                          90 => 'XC',
                          50 => 'L',
                          40 => 'XL',
                          10 => 'X',
                          9 => 'IX',
                          5 => 'V',
                          4 => 'IV',
                          1 => 'I'}
    number = self
    output = String.new
    roman_translation.each_key do |key|
      while number >= key do
        output.concat(roman_translation[key])
        number -= key
      end
    end
    output
  end
end
