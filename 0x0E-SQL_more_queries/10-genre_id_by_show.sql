-- lists all shows
SELECT tv_shows.title, tv_show_gen.genre_id FROM tv_shows
INNER JOIN tv_show_genres ON tv_shows.id = tv_show_gen.show_id
ORDER BY tv_shows.title, tv_show_gen.genre_id;