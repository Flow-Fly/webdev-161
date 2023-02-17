const express = require("express");
const path = require("path");

const mongoose = require("mongoose");
const FavColor = require("./models/FavColor.model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));



app.get("/api", (req, res, next) => {
  try {
    res.json({ message: "all good here" });
  } catch (error) {
    next(error);
  }
});

app.get("/api/colors", async (req, res, next) => {
  try {
    const allColors = await FavColor.find();
    res.json(allColors);
  } catch (error) {
    next(error);
  }
});


app.post("/api/colors", async (req, res, next) => {
  try {
    const { person, color } = req.body;

    if (!person || !color) {
      res.status(400).json({ error: "please fill all" });
      return;
    }

    const createdColor = await FavColor.create({ person, color });
    res.status(201).json(createdColor);
  } catch (error) {
    next(error);
  }
});


// error handler
app.use((err, req, res, next) => {
  console.error("ERROR", req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res
      .status(500)
      .json({
        message: "Internal server error. Check the server console",
      });
  }
});



// connects to db then set the app to listen for requests
mongoose.connect("mongodb://127.0.0.1:27017/fav-colors").then(async x => {
  console.log(`connected to ${x.connection.name}`);
  app.listen(3000, () => console.log("listening..."));
});