const router = require('express').Router()
const Joke = require('./../models/Joke.model')

/**
 * All of the routes here are prefixed by
 *    /api/jokes
 */

/**
 * GET Jokes
 */
router.get('/', async (req, res, next) => {
  // const myRegexp = /fish /i

  const query = {
    joke: RegExp(req.query.joke, 'i'),
    category: req.query.category,
  }
  try {
    const jokes = await Joke.find(query)
    res.json(jokes)
  } catch (error) {
    next(error)
  }
})

/**
 * Get one Joke
 */

router.get('/:id', async (req, res, next) => {
  try {
    const oneJoke = await Joke.findById(req.params.id)
    res.json({ oneJoke, message: 'Here you go, have fun!' })
  } catch (error) {
    next(error)
  }
})

/**
 * Create a Joke
 */

router.post('/', async (req, res, next) => {
  try {
    const { joke, category } = req.body
    const createdJoke = await Joke.create({ joke, category })
    res.status(201).json(createdJoke)
  } catch (error) {
    next(error)
  }
})

/**
 * Update a Joke
 */

router.patch('/:id', async (req, res, next) => {
  try {
    // /:phu
    //  req.params.phu

    // /:jokeId
    //  req.params.jokeID

    // /:id
    //  req.params.id

    const { id } = req.params
    const { joke, category } = req.body

    const updatedJoke = await Joke.findByIdAndUpdate(
      id,
      { joke, category },
      { new: true }
    )
    res.status(202).json(updatedJoke)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Joke.findByIdAndDelete(req.params.id)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = router
