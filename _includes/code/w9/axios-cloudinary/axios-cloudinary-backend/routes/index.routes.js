const router = require("express").Router();
const fileUpload = require('../config/cloudinary-config');

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/images", fileUpload.single('image'), (req, res, next) => {
  console.log(req.file.path);
  res.json({ image: req.file.path });
});

module.exports = router;
