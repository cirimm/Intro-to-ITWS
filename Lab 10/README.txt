Movies Added: Saving Private Ryan, The Emoji Movie

List out movies (Step 7):

SELECT movies.title
	FROM `movies`

Extra credit code:
SELECT movies.title, actors.lastname, actors.firstname
	FROM movies, actors, moviesactors
	WHERE moviesactors.movieid = movies.movieid
		AND moviesactors.actorid = actors.actorid
