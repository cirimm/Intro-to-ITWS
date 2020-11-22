-- create the tables for our movies

CREATE TABLE `movies` (
 `movieid` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `title` varchar(100) NOT NULL,
 `year` char(4) DEFAULT NULL,
 PRIMARY KEY (`movieid`)
);


CREATE TABLE `actors` (
  `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `birth` char(4) DEFAULT NULL,
  PRIMARY KEY (`actorid`)
);


CREATE TABLE `moviesactors` (
    `movieid` int(10) unsigned NOT NULL,
    `actorid` int(10) unsigned NOT NULL
);


-- insert data into the tables

INSERT INTO movies VALUES
  (1, "Elizabeth", "1998"),
  (2, "Elling", "2001"),
  (3, "Oh Brother Where Art Thou?", "2000"),
  (4, "The Lord of the Rings: The Fellowship of the Ring", "2001"),
  (5, "Up in the Air", "2009"),
  (6, "Saving Private Ryan", "1998"),
  (7, "The Fast and the Furious", "2001");

INSERT INTO actors VALUES
  (1, "Tom", "Hanks", "1956"),
  (2, "Elijah", "Wood", "1981"),
  (3, "Mark", "Sinclair", "1967"),
  (4, "Paul", "Walker", "1973"),
  (5, "Dwayne", "Johnson", "1972"),
  (6, "Cate",  "Blanchett", "1997");

INSERT INTO moviesactors VALUES
  (1, 6),
  (2, 0),
  (3, 0),
  (4, 0),
  (5, 0),
  (6, 1),
  (7, 3),
  (7, 4);