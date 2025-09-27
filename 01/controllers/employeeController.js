
const homePage = (req, res) => {
    res.send("<h1>This is the employees Home Page</h1>")
}
const aboutyPage = (req, res) => {
    res.send("<h1>This is the employees about Page</h1>")
}
const designationPage = (req, res) => {
    res.send("<h1>This is the employees Designation Page</h1>")
}
const departmentPage = (req, res) => {
    res.send("<h1>This is the employees department Page</h1>")
}
const salaryPage = (req, res) => {
    res.send("<h1>This is the employees Salary Page</h1>")
}

module.exports = {
    homePage,
    aboutyPage,
    designationPage,
    departmentPage,
    salaryPage
}