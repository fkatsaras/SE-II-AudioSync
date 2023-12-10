CREATE TABLE User (
id INT PRIMARY KEY,
username VARCHAR (255),
email VARCHAR(255),
password VARCHAR (255) NOT NULL
);

-- Playlist Table
CREATE TABLE Playlist (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR (255),
description TEXT
);

-- Song Table 
CREATE TABLE Song (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255),
artist VARCHAR(255),
duration VARCHAR(20), -- assuming duration is a string
genre VARCHAR(255) 
);

-- Artist Table
CREATE TABLE Artist (
user_id INT PRIMARY KEY,
name VARCHAR(255),
genre VARCHAR(255),
bio TEXT,
socialMedia JSON,
songs JSON,
albums JSON,
FOREIGN KEY (user_id) REFERENCES User(id)
);