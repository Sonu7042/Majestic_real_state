const express = require("express");
const { loginAdmin } = require("../controllers/authController");

const router = express.Router();

router.get("/login", (req, res) => {
  res.status(405).json({
    message: "Admin login expects a POST request with username and password.",
    example: {
      username: "admin",
      password: "admin123",
    },
  });
});

router.post("/login", loginAdmin);

module.exports = router;
