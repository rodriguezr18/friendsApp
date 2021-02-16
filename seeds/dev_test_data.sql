DROP DATABASE skylark_demo;

CREATE DATABASE skylark_demo;

USE skylark_demo;

CREATE TABLE users (
id INT NOT NULL AUTO_INCREMENT,
user_name VARCHAR (255),
user_password VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE quotes (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
quote TEXT,
user_id INT,
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE
ON UPDATE CASCADE
);

CREATE TABLE friends (
id INT NOT NULL AUTO_INCREMENT,
user_id1 INT,
user_id2 INT,
PRIMARY KEY (id)
);

INSERT INTO users (user_name, user_password) 
VALUES
('Dylan', 'pass' ),
('Test', 'pass'),
('Katie','pass'),
('Tristyn','pass'),
('Reggie','pass'),
('Lucy', 'pass'),
('Leland', 'pass'),
('Will', 'pass'),
('Jake', 'pass'),
('Mirko', 'pass'),
('Rey', 'pass'),
('Dan', 'pass'),
('Zach','pass');

INSERT INTO quotes (quote, user_id)
VALUES
("I like to think of Jesus as wearin' a tuxedo T-shirt, 'cause it says, like, 'I want to be formal, but I'm here to party too'", 1),
('Chips are good', 5),
('TESTING', 2),
('I like math', 3),
('Bilmuri', 4),
('The GOAT', 6),
('Dad Jokes', 7),
('Butts', 8),
('I like pizza', 9),
('50 the grease', 10),
('Go Pats!', 11),
('Vegan Straight Edge', 12),
('AH HA!', 13);

SELECT * FROM users;

INSERT INTO friends (user_id1, user_id2)
VALUES
(1,2),
(2,1),
(1,3),
(1,8),
(4,1),
(4,7),
(5,6),
(1,5),
(1,6);

SELECT users.user_name
FROM users
LEFT JOIN friends
ON friends.user_id2 = users.id
WHERE friends.user_id1 =1;

SELECT users.user_name, users.id
FROM users 
WHERE users.user_name = 'Dylan';


SELECT users.user_name,quotes.quote FROM quotes INNER JOIN users ON quotes.user_id = users.id




