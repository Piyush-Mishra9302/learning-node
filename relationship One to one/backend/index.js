

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();


app.use(cors());
app.use(express.json());


mongoose
  .connect("mongodb://localhost:27017/onetoonedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(" MongoDB connection error:", err));



const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const profileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Profile = mongoose.model("Profile", profileSchema);


app.post("/api/users", async (req, res) => {
  try {
    const { username, email, firstName, lastName } = req.body;


    const newUser = new User({ username, email });
    await newUser.save();

 
    const newProfile = new Profile({
      firstName,
      lastName,
      user: newUser._id,
    });
    await newProfile.save();

    
    newUser.profile = newProfile._id;
    await newUser.save();

    res.status(201).json({
      message: "User & profile created successfully",
      user: newUser,
      profile: newProfile,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().populate("profile");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.get("/", (req, res) => {
  res.send("✅ One-to-One Relationship API is running...");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
