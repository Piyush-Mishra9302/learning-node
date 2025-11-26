const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes")
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



mongoose.connect("mongodb://127.0.0.1:27017/oneToOneTutorial")
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err));

app.use("/user", userRoute)


app.listen(5000, () => console.log("Server is running on 5000 port"));