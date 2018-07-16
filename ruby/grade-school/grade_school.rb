class School
	def initialize
		@roster = Hash.new
	end
	def students(grade)
		if @roster[grade] == nil
			return []
		end
		@roster[grade].sort
	end
	def add(name, grade)
		if @roster[grade] == nil
			@roster[grade] = [name]
		else
			@roster[grade].push(name)
		end
	end
	def students_by_grade
		all_students = []
		@roster.sort.each do |key, value|
			all_students.push({:grade=>key, :students=>value.sort})
		end
		all_students
	end
end
module BookKeeping
	VERSION = 3
end