const UserModel = require("../models/user");
const ProfileModel = require("../models/profile");


const createUser = async (req, res) => {
    try {
        const {username, email, firstName, lastName, age} = req.body;

        //create profile
        const profile = await ProfileModel.create({firstName, lastName, age});

        //create user with reference to profile

        const user = await UserModel.create({
            username, email, profile : profile._id
        });
        res.json({message : "User created", user})
    } catch (error) {
        res.status(500).json(error);
    }


}

const fetchUser = async (req, res) => {
    const users = await UserModel.find().populate("profile");
    res.json(users);
}

module.exports = {
    createUser,
    fetchUser
}