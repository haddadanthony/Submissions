# BASIC QUERIES
1 Select name from students

2 Select name from students
  Where students.age > 30

3 Select name from students
  where students.Gender is "F" and students.age >= 30

4 Select points from students
  where students.name = "Alex"

5 insert into students
  values(9, "Elie", 26, "M", 1000)

6 update students
  set points = students.Points + 10
  where students.name = "Basma";

7 update students
  set points = students.Points - 10
  where students.name = "Alex";

8