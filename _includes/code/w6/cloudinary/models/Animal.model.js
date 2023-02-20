const { model, Schema } = require("mongoose");

const animalSchema = new Schema({
    name: String,
    size: String,
    picture_url: String,
});

const Animal = model("Animal", animalSchema);

module.exports = Animal;
