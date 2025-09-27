const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const stuRoute = require("./routes/stuRoute")
const empRoute = require("./routes/empRoutes")


//Database Connectivity
mongoose.connect("mongodb://127.0.0.1:27017/classStudent").then(() => {
    console.log("DB connected successfully!!!");
})

//Body-parser middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


app.set("view engine", "ejs");

//Routes
app.use("/students", stuRoute);
app.use("/employees", empRoute);

//server
app.listen(8000, () => {
    console.log("Server is running in 8000");
} )

