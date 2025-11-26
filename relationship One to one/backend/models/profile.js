const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    age : Number
});

module.exports = mongoose.model("Profile", profileSchema);