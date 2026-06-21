require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const signatureProjectRoutes = require("./routes/signatureProjectRoutes");
const adminSignatureProjectRoutes = require("./routes/adminSignatureProjectRoutes");
const partnerLogoRoutes = require("./routes/partnerLogoRoutes");
const adminPartnerLogoRoutes = require("./routes/adminPartnerLogoRoutes");
const blogRoutes = require("./routes/blogRoutes");
const adminBlogRoutes = require("./routes/adminBlogRoutes");
const galleryImageRoutes = require("./routes/galleryImageRoutes");
const adminGalleryImageRoutes = require("./routes/adminGalleryImageRoutes");
const errorHandler = require("./middleware/errorMiddleware");

connectDB();


const app = express();

const defaultOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://majesticlandbase.com"
  // "https://mejastic-real-state-slzz.vercel.app",
  // "https://mejastic-real-state.vercel.app"
];
const envOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((o) => o.trim())
  : [];
const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server API root!" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.use("/api/admin", authRoutes);
app.use("/api/signature-projects", signatureProjectRoutes);
app.use("/api/admin/signature-projects", adminSignatureProjectRoutes);
app.use("/api/partner-logos", partnerLogoRoutes);
app.use("/api/admin/partner-logos", adminPartnerLogoRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/admin/blogs", adminBlogRoutes);
app.use("/api/gallery-images", galleryImageRoutes);
app.use("/api/admin/gallery-images", adminGalleryImageRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for Vercel serverless deployment
module.exports = app;
