DROP DATABASE IF EXISTS friendfinder_db;

CREATE DATABASE friendfinder_db;

USE friendfinder_db;

CREATE TABLE questions(
	id INT NOT NULL AUTO_INCREMENT,
    question TEXT NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE answers(
	id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
	answer1 INT NOT NULL,
	answer2 INT NOT NULL,
	answer3 INT NOT NULL,
    answer4 INT NOT NULL,
    answer5 INT NOT NULL,
    answer6 INT NOT NULL,
    answer7 INT NOT NULL,
    answer8 INT NOT NULL,
    answer9 INT NOT NULL,
    answer10 INT NOT NULL,
	PRIMARY KEY (id)
);
