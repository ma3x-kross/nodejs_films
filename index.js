const Application = require('./framework/Application')
const PORT = process.env.PORT || 5000
const filmRouter = require('./src/routes/film.routes')
const genreRouter = require('./src/routes/genre.routes')
const jsonParser = require('./framework/parseJson')
const parsedUrl = require('./framework/parseUrl')

const app = new Application()
app.use(jsonParser)
app.use(parsedUrl('http://localhost:5000'))

app.addRouter(filmRouter)
app.addRouter(genreRouter)

app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
