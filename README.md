# Описание проекта
Этот проект представляет собой маленький сервер на Node.js, который работает с упрощенной базой данных фильмов. Он реализует CRUD операции для взаимодействия с жанрами и фильмами.

## Установка и запуск
1. Убедитесь, что у вас установлен Node.js и npm.
2. Скачайте или клонируйте репозиторий.
3. Откройте терминал и перейдите в папку проекта.
4. Установите зависимости, выполнив команду npm install.
5. Запустите сервер, выполнив команду npm start.

## API
### Фильмы
Добавление нового фильма
  `POST/films`
  тело запроса
  ```
{
	"title": "Зеленая миля",
	"production_year": 1999
}
```

Получение списка фильмов
	`GET/films`
  
Получение фильма по id
  `GET/films?id=`
  
Обновление фильма
  `PUT/films`
  тело запроса
  ```
{
	"id": 1,
	"title": "Поймай меня если ",
	"production_year": 2002
}
```

Удаление фильма
 `DELETE/films?id=`
 
 ### Жанры
Добавление нового жанра
  `POST/genres`
  тело запроса
  ```
{
	"name": "криминал",
	"film_id": 3
}
```

Получение списка жанров
	`GET/genres`
  
Получение жанра по id
  `GET/genres?id=`
  
Получение жанров фильма
  `GET/genres?film_id=`
  
Обновление жанра
  `PUT/genres`
  тело запроса
  ```
{
	"id": 3,
	"name": "комедия",
	"film_id": 3
}
```

Удаление жанра
 `DELETE/genres?id=`

