// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/wyattDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Lead = mongoose.model("Lead", leadSchema);

app.get("/", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});
app.get("/services", function(req, res){
  res.render("services");
});

app.post("/contact", function(req, res){

});

app.listen(3000, function(req, res){
  console.log("Server started on port 3000");
});
