const StuModel = require("../models/studentModel");

const homePage = (req, res) => {
    res.render("home");
}

const coursePage = (req, res) => {
      res.render("course");
}

const feesPage = (req, res) =>{
     res.render("fees");
}

const aboutPage = (req, res) => {
     res.render("about");
}

const salaryPage = (req, res) => {
      res.render("salary");
}

const datasave = (req, res) => {
    console.log(req.body);
    res.send("okk");
}


module.exports = {
    homePage,
    salaryPage,
    aboutPage,
    feesPage,
    coursePage,
    datasave
}