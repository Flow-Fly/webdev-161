const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));


app.get("/home", (req, res) => {
  res.render("home", { message: "Hello people!" });
});

app.get("/about", (req, res) => {
  res.render("about", { aboutMessage: "You don't know me!" });
});

app.get("/say-name/:name/:hobby", (req, res) => {
  res.send(`${req.params.name} likes ${req.params.hobby}`);
});

app.listen(3000, () => console.log("listening..."));