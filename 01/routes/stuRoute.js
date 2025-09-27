const express = require("express");
const route = express.Router();
const StuController = require("../controllers/studentController");

//student routes
route.get("/home", StuController.homePage);
route.get("/course", StuController.coursePage);
route.get("/fees", StuController.feesPage);
route.get("/salary", StuController.salaryPage);
route.get("/about", StuController.aboutPage);
route.post("/datasave", StuController.datasave)





module.exports = route;