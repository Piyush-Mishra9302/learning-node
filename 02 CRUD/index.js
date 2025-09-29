const express = require("express");
const app = express();
const mongoose = require("mongoose");
const studentRouter = require("./router/studentRouter")

//ejs integration
app.set("view engine", "ejs");

//Database connectivity
mongoose.connect("mongodb://127.0.0.1:27017/CRUD-Student").then(()=>console.log("MongoDB connected")).catch((err) => console.log(err));

// This middleware parses incoming JSON request bodies
app.use(express.urlencoded({ extended: true }));


//routes
app.use("/", studentRouter);

app.listen(9000, () => {
    console.log("Server is running on 9000 port")
})