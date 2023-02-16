const { Schema, model } = require("mongoose");

const favColorSchema = new Schema({
  person: String,
  color: String
});


const FavColor = model("FavColor", favColorSchema);

module.exports = FavColor;