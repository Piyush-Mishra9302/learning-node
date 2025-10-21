const express = require("express");
const routes = express.Router();
const studentController = require("../controllers/studentController");

routes.post("/save", studentController.dataSave);
routes.get("/display", studentController.display);
routes.post("/search", studentController.search);
routes.get("/updatedata", studentController.updateDisplay);
routes.delete("/updatedelete", studentController.updateDelete);
routes.get('/updateedit/:id', studentController.updateedit);
routes.post("/updateeditsave", studentController.updateeditsave);

module.exports = routes;