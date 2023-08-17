-- lists all the cities of California that can be found in the database hbtn_0d_usa
USE hbtn_0d_usa;
SHOW * FROM states WHERE name = California
GROUP BY cities.id ASC;