const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const studentRoute = require("./routes/studentRoutes");

// Database connectivity
mongoose.connect("mongodb://localhost:27017/MERNStudent")
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.log("❌ DB Error:", err));

// Middleware
app.use(cors()); // <-- () added
app.use(express.json()); // <-- fixed
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/students", studentRoute);

// Server start
app.listen(8000, () => {
  console.log("🚀 Server is running on port 8000");
});
