const express = require("express");
const { getPublicPartnerLogos } = require("../controllers/partnerLogoController");

const router = express.Router();

router.get("/", getPublicPartnerLogos);

module.exports = router;

