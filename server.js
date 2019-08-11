const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoose = require("mongoose");
const quotes = require("./routes/quote.route");

// SETS AND USES
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.use("/", quotes);
let DB_URL = "mongodb://localhost/quotes";
mongoose.connect(
  DB_URL,
  { useNewUrlParser: true, useFindAndModify: false },
  err => {
    if (err) return console.log(err);
    console.log("Connected to local DB");
  }
);
app.listen(3000, () => console.log("Server is running on port 3000.."));

// const URL = `mongodb+srv://admin:admin123@quotes-pp-c6axr.mongodb.net/test?retryWrites=true&w=majority`;
// const DB_NAME = "quotes";
// let database, collection;

// app.get("/", (req, res) => {
//   collection.find({}).toArray((err, result) => {
//     if (err) return console.log(err);
//     let { ...data } = result;

//     res.render("index", {
//       data
//     });
//   });
// });
// app.get("/quote/:id", (req, res) => {
//   collection.findOne({ _id: new ObjectId(req.params.id) }, (error, result) => {
//     if (error) {
//       return response.status(500).send(error);
//     }
//     res.render("quote", { result });
//   });
// });
// app.post("/", (req, res) => {
//   collection.insertOne(req.body, (err, result) => {
//     if (err) return console.log(err);
//     res.redirect("/");
//   });
// });
// app.listen(process.env.PORT || 3000, () => {
//   MongoClient.connect(URL, { useNewUrlParser: true }, (error, client) => {
//     if (error) throw error;
//     database = client.db(DB_NAME);
//     collection = database.collection("quotes");
//     console.log(`Connected to DB ${DB_NAME} !`);
//   });
// });
