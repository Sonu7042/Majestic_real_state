const express = require("express");
const {
  getAdminGalleryImages,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
} = require("../controllers/galleryImageController");
const { requireAdmin } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();
router.use(requireAdmin);
router.get("/", getAdminGalleryImages);
router.post("/", upload.single("image"), createGalleryImage);
router.put("/:id", upload.single("image"), updateGalleryImage);
router.delete("/:id", deleteGalleryImage);
module.exports = router;
