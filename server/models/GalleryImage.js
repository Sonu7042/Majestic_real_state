const mongoose = require("mongoose");

const galleryImageSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, default: "Gallery image" },
    image: { type: String, required: true },
    imagePublicId: { type: String, required: true },
    sortOrder: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("GalleryImage", galleryImageSchema);
