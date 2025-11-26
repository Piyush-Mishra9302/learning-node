const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.json({ message: "No Authentication" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // req.user.id will be available
    next();
  } catch (err) {
    res.json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
