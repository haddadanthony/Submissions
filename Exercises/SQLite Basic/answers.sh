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

# Joins

# 1
select employees.name, employees.Company, companies.Date
from employees
inner join companies on companies.Name = employees.Company

# 2
select employees.name, employees.Company, companies.Date
from employees
inner join companies on companies.Name = employees.Company
where companies.date < 2000

# 3
select companies.name from companies
inner join employees on employees.Company = companies.Name
where employees.Role = "Graphic Designer"

# Count and Filter

# 1
select name, max(points)
from students

# 2
select avg(points)
from students

# 3
select count(name)
from students
where points = 500

# 4
select name
from students
where name like "%s%"

# 5
select name, points
from students
order by points desc
