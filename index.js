const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");
const studentSchema = require("./model/studentSchema");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://mayank:mayank@cluster0.ffrrsv5.mongodb.net/schooldb"
);
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Disconnected to DB"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use("/studentRoute", studentRoute);

app.listen(4000, () => {
  console.log("Server started at 4000");
});
