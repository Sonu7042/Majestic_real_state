const express = require("express");
const { getPublicGalleryImages } = require("../controllers/galleryImageController");

const router = express.Router();
router.get("/", getPublicGalleryImages);
module.exports = router;
