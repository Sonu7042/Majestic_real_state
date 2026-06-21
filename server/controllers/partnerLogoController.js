const PartnerLogo = require("../models/PartnerLogo");
const { uploadImage, deleteImage } = require("../services/cloudinaryService");

const normalizeLogoPayload = (body) => {
  const payload = {};
  
  if (body.name !== undefined) {
    payload.name = body.name.trim();
  }
  
  if (body.bg !== undefined) {
    payload.bg = body.bg === "black" ? "black" : "white";
  }

  if (body.sortOrder !== undefined) {
    payload.sortOrder = Number(body.sortOrder || 0);
  }

  if (body.isActive !== undefined) {
    payload.isActive = body.isActive !== "false";
  }

  return payload;
};

const getPublicPartnerLogos = async (req, res) => {
  try {
    const logos = await PartnerLogo.find({ isActive: true })
      .sort({ sortOrder: 1, createdAt: -1 })
      .lean();

    res.json(logos);
  } catch (error) {
    res.status(500).json({ message: "Unable to load partner logos" });
  }
};

const getAdminPartnerLogos = async (req, res) => {
  try {
    const logos = await PartnerLogo.find()
      .sort({ sortOrder: 1, createdAt: -1 })
      .lean();

    res.json(logos);
  } catch (error) {
    res.status(500).json({ message: "Unable to load partner logos" });
  }
};

const createPartnerLogo = async (req, res) => {
  try {
    const logoFile = req.file;

    if (!logoFile) {
      return res.status(400).json({ message: "Partner logo image is required" });
    }

    if (!req.body.name || !req.body.name.trim()) {
      return res.status(400).json({ message: "Partner name is required" });
    }

    const uploadedLogo = await uploadImage(logoFile, "elitepro/partner-logos");
    
    const logoData = {
      ...normalizeLogoPayload(req.body),
      logo: uploadedLogo.url,
      logoPublicId: uploadedLogo.publicId,
    };

    const partnerLogo = await PartnerLogo.create(logoData);

    res.status(201).json(partnerLogo);
  } catch (error) {
    res.status(400).json({ message: error.message || "Unable to create partner logo" });
  }
};

const updatePartnerLogo = async (req, res) => {
  try {
    const partnerLogo = await PartnerLogo.findById(req.params.id);

    if (!partnerLogo) {
      return res.status(404).json({ message: "Partner logo not found" });
    }

    const update = normalizeLogoPayload(req.body);
    const logoFile = req.file;

    if (logoFile) {
      const uploadedLogo = await uploadImage(logoFile, "elitepro/partner-logos");
      update.logo = uploadedLogo.url;
      update.logoPublicId = uploadedLogo.publicId;

      await deleteImage(partnerLogo.logoPublicId);
    }

    Object.assign(partnerLogo, update);
    await partnerLogo.save();

    res.json(partnerLogo);
  } catch (error) {
    res.status(400).json({ message: error.message || "Unable to update partner logo" });
  }
};

const deletePartnerLogo = async (req, res) => {
  try {
    const partnerLogo = await PartnerLogo.findByIdAndDelete(req.params.id);

    if (!partnerLogo) {
      return res.status(404).json({ message: "Partner logo not found" });
    }

    await deleteImage(partnerLogo.logoPublicId);
    res.json({ message: "Partner logo deleted" });
  } catch (error) {
    res.status(400).json({ message: "Unable to delete partner logo" });
  }
};

module.exports = {
  getPublicPartnerLogos,
  getAdminPartnerLogos,
  createPartnerLogo,
  updatePartnerLogo,
  deletePartnerLogo,
};
