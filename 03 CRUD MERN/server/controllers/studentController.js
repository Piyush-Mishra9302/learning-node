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

const search = async(req, res) => {
    const {rollno} = req.body;
    const student = await studentModel.find({rollno:rollno});
    res.send(student);
}

const updateDisplay = async(req, res) =>{
    const myData = await studentModel.find();
    res.send(myData);
}
const updateDelete = async(req, res) => {
    const {id} = req.query;
    const student = await studentModel.findByIdAndDelete(id);
    res.send({msg:"Data Successfully Deleted"});
}
module.exports = {
    dataSave,
    display,
    search,
    updateDisplay,
    updateDelete
}