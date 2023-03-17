const db = require('../db/db')
class GenreController {
	async createGenre(req, res) {
		const { name, film_id } = req.body
		console.log(name, film_id)
		const newGenre = await db.query(
			`INSERT INTO genres (name, film_id) values ($1, $2) RETURNING *`,
			[name, film_id],
		)
		res.send(newGenre.rows[0])
	}

	async getGenres(req, res) {
		const { id, film_id } = req.params
		if (id) {
			const genre = await db.query(
				`SELECT *  FROM genres WHERE genre_id = $1`,
				[id],
			)
			res.send(genre.rows[0])
		}
		if (film_id) {
			const genre = await db.query(`SELECT *  FROM genres WHERE film_id = $1`, [
				film_id,
			])
			res.send(genre.rows[0])
		}
		const genres = await db.query(`SELECT *  FROM genres`)
		res.send(genres.rows)
	}

	async updateGenre(req, res) {
		const { id, name, film_id } = req.body
		const genre = await db.query(
			`UPDATE genres set name = $1, film_id = $2 WHERE genre_id = $3 RETURNING *`,
			[name, film_id, id],
		)
		res.send(genre.rows[0])
	}

	async deleteGenre(req, res) {
		const id = req.params.id
		if (id) {
			const genre = await db.query(`DELETE FROM genres WHERE genre_id = $1`, [
				id,
			])
			res.send(genre.rows[0])
		}
	}
}

module.exports = new GenreController()
