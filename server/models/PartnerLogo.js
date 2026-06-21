const mongoose = require("mongoose");

const partnerLogoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String,
      required: true,
    },
    logoPublicId: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      enum: ["white", "black"],
      default: "white",
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

module.exports = mongoose.model("PartnerLogo", partnerLogoSchema);
