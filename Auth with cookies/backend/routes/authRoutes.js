const express = require("express");
const { register, login, logout } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

// Protected route
router.get("/me", authMiddleware, (req, res) => {
  res.json({ message: "Authenticated", userId: req.user.id });
});

module.exports = router;
