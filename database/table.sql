create table user(
   id int primary key AUTO_INCREMENT,
   name varchar(250),
   email varchar(50),
   password varchar(250),
   status varchar(20),
   role varchar(20),
   UNIQUE(email)
);

insert into user values(default,'Admin','admin@gmail.com','admin','true','admin');

create table escala(
  id int primary key auto_increment,
  nome varchar(30),
  local varchar(30),
  data datetime,
  pessoas varchar(300);
  );

  update escala as e,user as u
set e.pessoas = u.name where e.id =1 and u.role = 'user' and u.id =4 ; 