const jwt = require("jsonwebtoken");

const signAdminToken = () =>
  jwt.sign({ role: "admin" }, process.env.JWT_SECRET || "change-this-secret", {
    expiresIn: "1d",
  });

const loginAdmin = (req, res) => {
  const { username, password } = req.body;
  const adminUsername = process.env.ADMIN_USERNAME || "admin";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  if (username !== adminUsername || password !== adminPassword) {
    return res.status(401).json({ message: "Invalid admin credentials" });
  }

  res.json({ token: signAdminToken() });
};

module.exports = { loginAdmin };
