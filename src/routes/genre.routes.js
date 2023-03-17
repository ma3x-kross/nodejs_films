const Router = require('../../framework/Router')
const router = new Router()
const GenreController = require('../controller/genre.controller')

router.post('/genres', GenreController.createGenre)
router.get('/genres', GenreController.getGenres)
router.put('/genres', GenreController.updateGenre)
router.delete('/genres', GenreController.deleteGenre)

module.exports = router
