
const studentModel = require("../models/studentModel")

const homePage = (req, res) => {
    res.render("home");
}

const insertPage = (req, res) => {
    res.render("insert");
}

const dataSave = (req, res) => {
   const {roll_no, name, city, fees} = req.body;
   studentModel.create({
    roll_no: roll_no,
    name: name,
    city: city,
    fees, fees
   })
   res.render("insert");
}


module.exports = {
    homePage,
    insertPage,
    dataSave
}