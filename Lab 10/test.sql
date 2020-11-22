
CREATE TABLE `moviesactors` (
   movieid NOT NULL,
   actorid NOT NULL,
   PRIMARY KEY(movieid, actorid);
   FOREIGN KEY movieid references movies (`movieid`) on delete cascade,
   FOREIGN KEY actorid  references actors  (`actorid`) on delete cascade

);
