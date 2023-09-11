-- lists all the cities of California that can be found in the database hbtn_0d_usa
-- lists all the cities of California
SELECT id, name FROM cities
WHERE id = (
	SELECT id FROM states
	WHERE id = 1
)
ORDER BY id ASC;