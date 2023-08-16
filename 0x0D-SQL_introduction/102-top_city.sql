---- Display top 3 cities with max temp between July and August
SELECT city, MAX(temperature) AS max_temp
FROM temperatures
WHERE MONTH(date) IN (7, 8)
GROUP BY city
ORDER BY max_temp DESC
LIMIT 3;