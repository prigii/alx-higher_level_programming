---display avg temp in F by city
SELECT city, ROUND(AVG(temperature))
AS avg_temp
FROM temperatures
GROUP BY city
ORDER BY avg_temp DESC;