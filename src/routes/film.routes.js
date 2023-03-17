const Router = require('../../framework/Router')
const router = new Router()
const FilmController = require('../controller/film.controller')

router.post('/films', FilmController.createFilm)
router.get('/films', FilmController.getFilms)
router.put('/films', FilmController.updateFilm)
router.delete('/films', FilmController.deleteFilm)

module.exports = router
