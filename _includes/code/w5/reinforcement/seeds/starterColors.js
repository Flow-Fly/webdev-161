const mongoose = require("mongoose");
const FavColor = require("../models/FavColor.model");

const favColors = [
  {
    person: "Delfina",
    color: "Green"
  },
  {
    person: "Marianne",
    color: "Green"
  },
  {
    person: "Ismet",
    color: "Green"
  },
  {
    person: "Kilian",
    color: "Green"
  },
];

mongoose.connect("mongodb://127.0.0.1:27017/fav-colors")
  .then(async x => {
    console.log(`connected to ${x.connection.name}`);
    await FavColor.deleteMany();

    const createdFavColors = await FavColor.create(favColors);

    console.log(`created ${createdFavColors.length} fav colors!!`, createdFavColors);

    mongoose.disconnect();
  });