const express = require("express");
const {
  getPublicBlogById,
  getPublicBlogs,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/", getPublicBlogs);
router.get("/:id", getPublicBlogById);

module.exports = router;
