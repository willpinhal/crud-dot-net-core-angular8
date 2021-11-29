create table category (
	Id int unsigned auto_increment,
	Name varchar(128) not null,
    primary key(Id)
);

create table device (
	Id int unsigned auto_increment,
    CategoryId int unsigned not null,
    Color varchar(16) not null,
    PartNumber int unsigned,
    primary key(Id),
    foreign key(CategoryId) references category(Id)
);