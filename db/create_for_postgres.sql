create user client;

alter user client with password 'qwerty';

create database project;

grant all privileges on database project to client;

