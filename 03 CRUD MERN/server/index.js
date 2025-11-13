const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const studentRoute = require("./routes/studentRoutes");

// Database connectivity
mongoose.connect("mongodb://localhost:27017/MERNStudent")
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.log("❌ DB Error:", err));

// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use((req, res,next) => {
  console.log("First App level middlewear");
  next()
})

app.get("/home", (req, res) => {
  console.log(("Home Page"));
  res.send("Welcome to the homePage")
})
app.get("/insert", (req, res) => {
  console.log(("Insert Page"));
  res.send("Welcome to the homePage")
})
app.get("/display", (req, res) => {
  console.log(("Display Page"));
  res.send("Welcome to the homePage")
})


// app.use("/students", studentRoute);

// Server start
app.listen(8000, () => {
  console.log("🚀 Server is running on port 8000");
});
