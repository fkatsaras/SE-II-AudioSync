CREATE TABLE User (
user_id INT PRIMARY KEY,
username VARCHAR (255),
email VARCHAR(255),
password VARCHAR (255) NOT NULL
);

-- Artist Table
CREATE TABLE Artist (
artist_id INT PRIMARY KEY,
user_id INT,
name VARCHAR(255),
genre VARCHAR(255),
bio TEXT,
socialMedia JSON,
songs JSON,
albums JSON,
FOREIGN KEY (user_id) REFERENCES User(user_id)
);


-- Song Table 
CREATE TABLE Song (
song_id INT PRIMARY KEY,
title VARCHAR(255),
artist VARCHAR(255),
duration VARCHAR(20), -- assuming duration is a string
genre VARCHAR(255),
artist_id INT,
FOREIGN KEY (artist_id) REFERENCES Artist(artist_id) -- Artist creates a song
);

-- Playlist Table (Accomodates user creating a playlist functionality)
CREATE TABLE Playlist (
playlist_id INT PRIMARY KEY,
user_id INT,
title VARCHAR (255),
description TEXT,
FOREIGN KEY (user_id) REFERENCES User(user_id)
);


-- Table for user likes a playlist functionality
CREATE TABLE LikedPlaylists(
user_id INT,
playlist_id INT,
PRIMARY KEY (user_id, playlist_id),
FOREIGN KEY (user_id) REFERENCES User(user_id),
FOREIGN KEY (playlist_id) REFERENCES Playlist(playlist_id)
);

-- Table for user likes a song functionality
CREATE TABLE LikedSongs (
user_id INT,
song_id INT,
PRIMARY KEY (user_id, song_id),
FOREIGN KEY (user_id) REFERENCES User(user_id),
FOREIGN KEY (song_id) REFERENCES Song(song_id)
);

-- Table for user follows an artist functionality
CREATE TABLE FollowingArtists (
user_id INT,
artist_id INT,
PRIMARY KEY (user_id, artist_id),
FOREIGN KEY (user_id) REFERENCES User(user_id),
FOREIGN KEY (artist_id) REFERENCES Artist(artist_id)
);

-- Table to accomodate viewing song history
CREATE TABLE ListeningHistory (
user_id INT,
song_id INT,
timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES User(user_id),
FOREIGN KEY (song_id) REFERENCES Song(song_id)
);