# BASIC QUERIES
1 Select name from students

2 Select name from students
  Where students.age > 30

3 Select name from students
  where students.Gender is "F" and students.age = 30

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


# Creating Table
# 1
create table graduates(
	id integer not null primary key autoincrement,
	name text not null unique,
	age integer,
	gender text,
	points integer,
	graduation date
);

# 2
insert into graduates(id, name, age, gender, points)
select * from students
where students.name = "Layal"

# 3
update graduates
set graduation = "08/09/2019"
where graduates.name = "Layal"

# 4
delete from graduates
where name = "Layal";
