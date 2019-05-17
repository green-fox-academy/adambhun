CREATE DATABASE asdf;
USE asdf;
CREATE TABLE tableone (entries VARCHAR(32));
INSERT INTO tableone (entries) values ('first entry');
CREATE USER "adam"@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON asdf.tableone TO "adam"@'localhost';