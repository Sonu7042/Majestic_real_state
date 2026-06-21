const express = require("express");
const {
  createSignatureProject,
  deleteSignatureProject,
  getAdminSignatureProjects,
  updateSignatureProject,
} = require("../controllers/signatureProjectController");
const { requireAdmin } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.use(requireAdmin);
router.get("/", getAdminSignatureProjects);
router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "galleryImages", maxCount: 8 },
  ]),
  createSignatureProject
);
router.put(
  "/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "galleryImages", maxCount: 8 },
  ]),
  updateSignatureProject
);
router.delete("/:id", deleteSignatureProject);

module.exports = router;
