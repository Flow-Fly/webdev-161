const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});
router.use("/celebrities", require("./celebrity.routes"));
router.use("/movies", require("./movie.routes"));

module.exports = router;
