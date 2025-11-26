const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController");


route.post("/create-user", userController.createUser);
route.get("/users", userController.fetchUser);

module.exports = route