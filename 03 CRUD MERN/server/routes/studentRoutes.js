const express = require("express");
const routes = express.Router();
const studentController = require("../controllers/studentController");

routes.post("/save", studentController.dataSave);
routes.get("/display", studentController.display);

module.exports = routes;