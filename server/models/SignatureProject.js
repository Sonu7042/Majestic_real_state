const mongoose = require("mongoose");

const signatureProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    area: {
      type: String,
      default: "On Request",
      trim: true,
    },
    price: {
      type: String,
      default: "Price on Request",
      trim: true,
    },
    priceSubtext: {
      type: String,
      default: "Starting price. Taxes & charges extra.",
      trim: true,
    },
    badge: {
      type: String,
      default: "Signature",
      trim: true,
    },
    description: {
      type: String,
      default: "Property description will be updated soon.",
      trim: true,
    },
    developer: {
      type: String,
      default: "Elite Pro Infra",
      trim: true,
    },
    developerDescription: {
      type: String,
      default: "Developer details will be updated soon.",
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    imagePublicId: {
      type: String,
      default: "",
    },
    galleryImages: {
      type: [String],
      default: [],
    },
    galleryImagePublicIds: {
      type: [String],
      default: [],
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SignatureProject", signatureProjectSchema);
