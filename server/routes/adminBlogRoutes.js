const express = require("express");
const {
  createBlog,
  deleteBlog,
  getAdminBlogs,
  updateBlog,
} = require("../controllers/blogController");
const { requireAdmin } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.use(requireAdmin);
router.get("/", getAdminBlogs);
router.post("/", upload.single("image"), createBlog);
router.put("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
