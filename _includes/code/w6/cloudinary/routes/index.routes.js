const express = require('express');
const Animal = require('../models/Animal.model');
const router = express.Router();
const fileUpload = require('../config/cloudinary.config')

/* GET home page with all animals */
router.get("/", async (req, res) => {
  const allAnimals = await Animal.find()
  res.render("index", { allAnimals })
});

// Get animal creation form
router.get("/animals/create", (req, res) => {
  res.render("create-animal")
})

// Create animal
router.post("/animals/create", fileUpload.single('picture_url'), async (req, res) => { // Don't forget the middleware
  const { name, size } = req.body
  console.log(req.file.path)
  await Animal.create({ name, size, picture_url: req.file.path })
  res.redirect("/")

})

// Get animal edit form
router.get("/animals/:id", async (req, res) => {
  const animal = await Animal.findById(req.params.id)
  res.render("animal", { animal })
})

// Save changes
router.post("/animals/:id", fileUpload.single('picture_url'), async (req, res) => {
  const { name, size } = req.body
  await Animal.findByIdAndUpdate(req.params.id, {
    name,
    size,
    picture_url: req.file?.path // Only sends the path if there is a new file provided
  })
  res.redirect("/")

})

module.exports = router;
