# Steps to create your server:

- `npm init -y`
- Install express, hbs, mongoose
- Add the `start` and `dev` script (`nodemon -e hbs,js,css app.js`)
- create the app.js file
- create those folders:
  - `views/partials`
  - `public/css public/js`
  - `config`
- In the `app.js`, require express, hbs, path.
- in the config folder, create a `db.config.js` file.
  - This file should connect you to the Database
- After requiring the `dbConfig`, you'll want to do the configuration of your app:
```js
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
```

- When that is done, we will need to create some views:



| Method | Endpoint | Action |
| -------- | -------- | -------- |
| GET     | /guitars     | Display all guitars     |
| GET     | /guitars/:id     | Display A Guitar     |
| GET     | /guitars/create     | Display A form to create a guitar     |
| POST     | /guitars/create'    | Create a guitar     |
| GET     | /guitars/search?brand=xxx'    | Allow us to search through the guitars via a Query String     |




