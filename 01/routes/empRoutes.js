const express = require("express");

const route = express.Router();

const empController = require("../controllers/employeeController");

route.get("/home", empController.homePage);
route.get("/about", empController.aboutyPage);
route.get("/designation", empController.designationPage);
route.get("/department", empController.departmentPage);
route.get("/salary", empController.salaryPage);

module.exports = route;