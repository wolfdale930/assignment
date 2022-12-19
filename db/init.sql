create schema if not exists public;

create table if not exists users (
	id serial primary key,
	usernameemail varchar(100) not null,
	password text not null,
	salt text not null
);

create table if not exists question_bank (
	id serial primary key,
	question text not null,
	option1 text not null,
	option2 text not null,
	option3 text not null,
	option4 text not null,
	answer text not null
);

insert into question_bank (id, question, option1, option2, option3, option4, answer) values (1, 'qustion1', 'option1', 'option2', 'option3', 'option4', 'option1') on conflict do nothing;
insert into question_bank (id, question, option1, option2, option3, option4, answer) values (2, 'qustion2', 'option1', 'option2', 'option3', 'option4', 'option2') on conflict do nothing;
insert into question_bank (id, question, option1, option2, option3, option4, answer) values (3, 'qustion3', 'option1', 'option2', 'option3', 'option4', 'option3') on conflict do nothing;
insert into question_bank (id, question, option1, option2, option3, option4, answer) values (4, 'qustion4', 'option1', 'option2', 'option3', 'option4', 'option4') on conflict do nothing;
insert into question_bank (id, question, option1, option2, option3, option4, answer) values (5, 'qustion5', 'option1', 'option2', 'option3', 'option4', 'option2') on conflict do nothing;
insert into question_bank (id, question, option1, option2, option3, option4, answer) values (6, 'qustion6', 'option1', 'option2', 'option3', 'option4', 'option3') on conflict do nothing;