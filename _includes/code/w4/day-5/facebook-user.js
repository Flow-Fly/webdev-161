const batchOfStudents = [
  {
    name: 'Alice',
    age: 58,
    projects: ['first one', 'second one'],
  },
  {
    name: 'John',
    age: 41,
    projects: ['first one', 'second one'],
  },
  {
    name: 'Doe',
    age: 32,
    projects: ['first one', 'second one'],
  },
]
const batchOfPets = [
  { name: 'Zee', age: 2, color: 'yellow' },
  { name: 'Boo', age: 2, color: 'blue' },
  { name: 'Mee', age: 4, color: 'yellow' },
  { name: 'Yoo', age: 1, color: 'green' },
  { name: 'Paa', age: 7, color: 'black' },
]
/**
 * ! User
 * name
 * id
 * picture_url
 */

/**
 * ! likes
 *
 * user: userId
 * content: contentId
 */

/**
 * ! Content
 * id: 5
 * creator: userId
 * content: Great video!
 *
 *  */

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const petSchema = new Schema({
  name: String,
  age: {
    type: Number,
    min: 0,
  },
  color: {
    type: String,
    enum: ['pink', 'blue', 'black', 'green', 'yellow'],
  },
})
/**
 * name: "Bob",
 * age: 28,
 * projects: ['awesome-game', 'crud a day']
 */

const studentSchema = new Schema({
  name: {
    type: String,
    maxLength: 200,
    // match: /[A-Za-z]+/
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  projects: [String],
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'pet',
  },
})
const Pet = mongoose.model('pet', petSchema)

const Student = mongoose.model('student', studentSchema)

mongoose
  .connect('mongodb://localhost/my-very-first-database')
  .then(async (db) => {
    console.log(`We are connected to ${db.connection.name}`)

    try {
      await Pet.deleteMany()
      await Student.deleteMany()
      const newStudent = await Student.create({
        name: 'Bob',
        age: 28,
        projects: ['first one', 'second one'],
      })

      const allCreatedPets = await Pet.create(batchOfPets)

      const allCreatedStudents = await Student.create(batchOfStudents)

      const aliceDocument = await Student.findOne({
        name: { $regex: /alice/, $options: 'i' },
      })
      aliceDocument.pet = allCreatedPets[0]._id
      await aliceDocument.save()
      await Student.findOneAndUpdate(
        { name: 'Bob' },
        { name: 'bloop', age: 50 },
        { upsert: true }
      )

      console.log(aliceDocument)

      const studentGreaterThan30 = await Student.find({ age: { $gt: 30 } })
      console.log('> 30', studentGreaterThan30)

      console.log(allCreatedPets[0])

      const something = await Student.findByIdAndUpdate(
        aliceDocument._id,
        {
          age: 28,
        },
        { new: true }
      )
      console.log('Alice after age updates:', something)

      await Pet.findOneAndDelete({ name: 'Yoo' })

      // console.log(newStudent)
    } catch (error) {
      console.log(error)
    }
  })
  .catch((e) => console.log(e))
  .finally(() => {
    mongoose.connection.close()
  })

/**
 * Model. create
 *         createOne
 *        find
 *        findOne
 *        findById
 *        findByIdAndRemove
 *        findByIdAndUpdate
 *        findOneAndUpdate
 */
