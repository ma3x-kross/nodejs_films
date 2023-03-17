CREATE TABLE films(
	film_id serial PRIMARY KEY,
	title varchar(255),
	production_year int
);

CREATE TABLE genres(
	genre_id serial PRIMARY KEY,
	name varchar(255),
	film_id int,
	FOREIGN KEY (film_id) REFERENCES films(film_id)
);

