const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");


router.get("/", async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.render("celebrities/celebrities", { allCelebrities });
  } catch (error) {
    next(error);
  }
});

router.get("/create", (req, res, next) => {
  try {
    res.render("celebrities/new-celebrity");
  } catch (error) {
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;

    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});


module.exports = router;