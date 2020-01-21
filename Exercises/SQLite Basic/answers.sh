
"Select name from students"

"Select name from students
  Where students.age > 30"

'Select name from students
where students.Gender is "F" and students.age = 30'

'Select points from students
where students.name = "Alex"'

'insert into students
values(9, "Elie", 26, "M", 1000)'

'update students
  set points = students.Points + 10
  where students.name = "Basma"'

'update students
  set points = students.Points - 10
  where students.name = "Alex"'



'create table graduates(
	id integer not null primary key autoincrement,
	name text not null unique,
	age integer,
	gender text,
	points integer,
	graduation date
);'


'insert into graduates(id, name, age, gender, points)
select * from students
where students.name = "Layal"'


'update graduates
set graduation = "08/09/2019"
where graduates.name = "Layal"'


'delete from graduates
where name = "Layal";'



'select employees.name, employees.Company, companies.Date
from employees
inner join companies on companies.Name = employees.Company'


'select employees.name, employees.Company, companies.Date
from employees
inner join companies on companies.Name = employees.Company
where companies.date < 2000'


'select companies.name from companies
inner join employees on employees.Company = companies.Name
where employees.Role = "Graphic Designer"'



'select name, max(points)
from students'


'select avg(points)
from students'


'select count(name)
from students
where points = 500'


'select name
from students
where name like "%s%"'


'select name, points
from students
order by points desc'
