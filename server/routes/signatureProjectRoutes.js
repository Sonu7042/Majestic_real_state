const express = require("express");
const {
  getPublicSignatureProjects,
  getPublicSignatureProjectById,
} = require("../controllers/signatureProjectController");

const router = express.Router();

router.get("/", getPublicSignatureProjects);
router.get("/:id", getPublicSignatureProjectById);

module.exports = router;
