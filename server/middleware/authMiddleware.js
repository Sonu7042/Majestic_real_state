const jwt = require("jsonwebtoken");

const requireAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: "Admin login required" });
  }

  try {
    req.admin = jwt.verify(token, process.env.JWT_SECRET || "change-this-secret");
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired admin session" });
  }
};

module.exports = { requireAdmin };
