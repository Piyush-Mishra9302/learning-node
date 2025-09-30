
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

const displayPage = async (req, res) => {
    const student = await studentModel.find();
    res.render("display", {stu:student});
}

const searchPage = async (req, res) => {
    res.render("search", {stu:[]});
}

const stuSearch = async(req, res) => {
    const {roll_no} = req.body;
    const student = await studentModel.find({roll_no:roll_no});
    res.render("search", {stu:student})
}

module.exports = {
    homePage,
    insertPage,
    dataSave,
    displayPage,
    searchPage,
    stuSearch
}