const db = require('../db/db')
class FilmController {
	async createFilm(req, res) {
		const { title, production_year } = req.body
		console.log(title, production_year)
		const newFilm = await db.query(
			`INSERT INTO films (title, production_year) values ($1, $2) RETURNING *`,
			[title, production_year],
		)
		res.send(newFilm.rows[0])
	}

	async getFilms(req, res) {
		const id = req.params.id
		if (id) {
			const film = await db.query(
				`SELECT *  FROM films JOIN genres USING(film_id) WHERE film_id = $1`,
				[id],
			)
			res.send(film.rows[0])
		}
		const films = await db.query(
			`SELECT * FROM films JOIN genres USING(film_id)`,
		)
		res.send(films.rows)
	}

	async updateFilm(req, res) {
		const { id, title, production_year } = req.body
		const film = await db.query(
			`UPDATE films set title = $1, production_year = $2 WHERE film_id = $3 RETURNING *`,
			[title, production_year, id],
		)
		res.send(film.rows[0])
	}

	async deleteFilm(req, res) {
		const id = req.params.id
		if (id) {
			const film = await db.query(`DELETE FROM films WHERE film_id = $1`, [id])
			res.send(film.rows[0])
		}
	}
}

module.exports = new FilmController()
