const express = require("express");
const {
  getAdminPartnerLogos,
  createPartnerLogo,
  updatePartnerLogo,
  deletePartnerLogo,
} = require("../controllers/partnerLogoController");
const { requireAdmin } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.use(requireAdmin);

router.get("/", getAdminPartnerLogos);
router.post("/", upload.single("logo"), createPartnerLogo);
router.put("/:id", upload.single("logo"), updatePartnerLogo);
router.delete("/:id", deletePartnerLogo);

module.exports = router;
