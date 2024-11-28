var express = require("express");
var port = 4000;
var mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://BGMI:hardwork68@bundel.ro362.mongodb.net/BGMI"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

const player = new mongoose.Schema({
  name: String,
  level: Number,
  KD: Number,
});

const players = new mongoose.model("BGMI Player", player);

// 1 way to add data
const addData = () => {
  // const player1 = new players({
  //     name: 'Anshul',
  //     level: 74,
  //     KD : 4.24
  // })
  // player1.save()

  // 2 way to add data
//   players.create({
//     name: "Goku",
//     level: 79,
//     KD: 3.68,
//   });
};

addData(); // call function to save the data
var app = express();
app.listen(port, () => {
  console.log(`Server is Up and running on port ${port}`);
});
