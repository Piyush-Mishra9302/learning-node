const studentModel = require('../models/studentModel');

const dataSave = async(req, res) => {
    const {rollno, name, city, fees} = req.body;
    const student = await studentModel.create({
        rollno:rollno,
        name: name,
        city:city,
        fees: fees

    })
    res.send("Data saved Successfully");
}

const display = async(req, res) => {
    const myData = await studentModel.find();
    res.send(myData);
}

module.exports = {
    dataSave,
    display
}