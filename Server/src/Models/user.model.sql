create table role(
    id int auto_increment primary key,
    active BOOLEAN DEFAULT TRUE,
    name varchar(50)
);
insert into role(name) values("user","admin","modarator","superadmin");


create table users(
    id int auto_increment primary key,
    active BOOLEAN DEFAULT TRUE
    full_name varchar(70),
    mobile varchar(30),
    email varchar(50),
    password varchar(200),
    roleId int,

    FOREIGN KEY (roleId) REFERENCES role(id)
)