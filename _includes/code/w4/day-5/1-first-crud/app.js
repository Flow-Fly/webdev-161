const mongoose = require('mongoose')

const express = require('express')
const hbs = require('hbs')
const path = require('path')
const { nextTick } = require('process')

const app = express()

mongoose.connect('mongodb://localhost/first-crud-with-a-db').then((db) => {
  console.log(`Connected to ${db.connection.name}`)
})

const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
})
const Student = mongoose.model('student', studentSchema)

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'hbs')

app.get('/create-student', async (req, res, next) => {
  try {
    res.render('create-student')
  } catch (error) {
    next(error)
  }
})
app.get('/', async (req, res, next) => {
  // Create some data
  try {
    const bobs = await Student.find()
    res.render('home', { bobs })
  } catch (error) {
    next(error)
  }
})

app.get('/student', async (req, res, next) => {
  const { name, age } = req.query
  try {
    const createdStudent = await Student.create({
      name: name,
      age: age,
    })
    console.log(createdStudent)
    res.redirect('/')
  } catch (error) {
    next(error)
  }
})

app.get('/student/:id', async (req, res, next) => {
  try {
    await Student.findByIdAndDelete(req.params.id)
    res.redirect('/')
  } catch (error) {
    next(error)
  }
})

app.listen(5555, () => {
  console.log('http://localhost:5555')
})
