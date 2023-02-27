const router = require('express').Router()
const Ducks = require('./../models/Rubberduck.model')

router.get('/rubberducks', async (req, res, next) => {
  try {
    const allDucks = await Ducks.find()
    res.status(200).json(allDucks)
  } catch (error) {
    next(error)
  }
})

router.delete('/rubberducks/:duckId', async (req, res, next) => {
  try {
    await Ducks.findByIdAndDelete(req.params.duckId)
    res.json({ message: `Duck with id: ${req.params.duckId} was deleted` })
  } catch (error) {
    next(error)
  }
})

router.post('/rubberducks', async (req, res, next) => {
  try {
    // const duckToCreate = {
    //   name: req.body.name,
    //   color: req.body.color
    //   ...
    // }

    const duckToCreate = { ...req.body }
    const createdDuck = await Ducks.create(duckToCreate)
    res.status(201).json(createdDuck)
  } catch (error) {
    next(error)
  }
})

router.patch('/rubberducks/:duckId', async (req, res, next) => {
  const { duckId } = req.params
  const duckToUpdate = { ...req.body }
  try {
    const duck = await Ducks.findByIdAndUpdate(duckId, duckToUpdate)
    res.json({ message: `Successfully updated duck: ${duckId}`, duck })
  } catch (error) {
    next(error)
  }
})

module.exports = router
