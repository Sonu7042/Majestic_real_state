const GalleryImage = require("../models/GalleryImage");
const { uploadImage, deleteImage } = require("../services/cloudinaryService");

const normalizePayload = (body) => {
  const payload = {};
  if (body.title !== undefined) payload.title = body.title.trim() || "Gallery image";
  if (body.sortOrder !== undefined) payload.sortOrder = Number(body.sortOrder || 0);
  if (body.isActive !== undefined) payload.isActive = body.isActive !== "false";
  return payload;
};

const getPublicGalleryImages = async (req, res) => {
  try {
    const images = await GalleryImage.find({ isActive: true })
      .sort({ sortOrder: 1, createdAt: -1 })
      .lean();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Unable to load gallery images" });
  }
};

const getAdminGalleryImages = async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ sortOrder: 1, createdAt: -1 }).lean();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Unable to load gallery images" });
  }
};

const createGalleryImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "Gallery image is required" });
    const uploaded = await uploadImage(req.file, "elitepro/gallery");
    const image = await GalleryImage.create({
      ...normalizePayload(req.body),
      image: uploaded.url,
      imagePublicId: uploaded.publicId,
    });
    res.status(201).json(image);
  } catch (error) {
    res.status(400).json({ message: error.message || "Unable to add gallery image" });
  }
};

const updateGalleryImage = async (req, res) => {
  try {
    const image = await GalleryImage.findById(req.params.id);
    if (!image) return res.status(404).json({ message: "Gallery image not found" });

    const update = normalizePayload(req.body);
    if (req.file) {
      const uploaded = await uploadImage(req.file, "elitepro/gallery");
      update.image = uploaded.url;
      update.imagePublicId = uploaded.publicId;
      await deleteImage(image.imagePublicId);
    }

    Object.assign(image, update);
    await image.save();
    res.json(image);
  } catch (error) {
    res.status(400).json({ message: error.message || "Unable to update gallery image" });
  }
};

const deleteGalleryImage = async (req, res) => {
  try {
    const image = await GalleryImage.findByIdAndDelete(req.params.id);
    if (!image) return res.status(404).json({ message: "Gallery image not found" });
    await deleteImage(image.imagePublicId);
    res.json({ message: "Gallery image deleted" });
  } catch (error) {
    res.status(400).json({ message: "Unable to delete gallery image" });
  }
};

module.exports = {
  getPublicGalleryImages,
  getAdminGalleryImages,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
};
