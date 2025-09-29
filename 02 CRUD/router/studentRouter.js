const express = require("express");
const route = express.Router();
const StuController = require("../controller/StudentController")


route.use("/home", StuController.homePage )
route.use("/insert",StuController.insertPage )
route.use("/save", StuController.dataSave)


module.exports = route;