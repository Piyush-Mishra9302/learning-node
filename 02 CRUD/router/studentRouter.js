const express = require("express");
const route = express.Router();
const StuController = require("../controller/StudentController")


route.get("/home", StuController.homePage )
route.get("/insert",StuController.insertPage )
route.post("/save", StuController.dataSave)
route.get("/display", StuController.displayPage)
route.get("/search", StuController.searchPage)
route.post("/search", StuController.stuSearch)

module.exports = route;