const SignatureProject = require("../models/SignatureProject");
const { deleteImage, uploadImage } = require("../services/cloudinaryService");

const normalizeProjectPayload = (body) => {
  const payload = {};
  const stringFields = [
    "title",
    "location",
    "type",
    "area",
    "price",
    "priceSubtext",
    "badge",
    "description",
    "developer",
    "developerDescription",
  ];

  stringFields.forEach((field) => {
    if (body[field] !== undefined) {
      payload[field] = body[field];
    }
  });

  if (body.sortOrder !== undefined) {
    payload.sortOrder = Number(body.sortOrder || 0);
  }

  if (body.isActive !== undefined) {
    payload.isActive = body.isActive !== "false";
  }

  return payload;
};

const uploadGalleryImages = async (files = []) => {
  const uploadedImages = await Promise.all(files.map((file) => uploadImage(file)));

  return {
    galleryImages: uploadedImages.map((image) => image.url),
    galleryImagePublicIds: uploadedImages.map((image) => image.publicId),
  };
};

const getPublicSignatureProjects = async (req, res) => {
  try {
    const projects = await SignatureProject.find({ isActive: true })
      .sort({ sortOrder: 1, createdAt: -1 })
      .lean();

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Unable to load signature projects" });
  }
};

const getPublicSignatureProjectById = async (req, res) => {
  try {
    const project = await SignatureProject.findOne({
      _id: req.params.id,
      isActive: true,
    }).lean();

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(404).json({ message: "Project not found" });
  }
};

const getAdminSignatureProjects = async (req, res) => {
  try {
    const projects = await SignatureProject.find()
      .sort({ sortOrder: 1, createdAt: -1 })
      .lean();

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Unable to load signature projects" });
  }
};

const createSignatureProject = async (req, res) => {
  try {
    const mainImage = req.file || req.files?.image?.[0];
    const galleryFiles = req.files?.galleryImages || [];

    if (!mainImage) {
      return res.status(400).json({ message: "Project image is required" });
    }

    const uploadedImage = await uploadImage(mainImage);
    const uploadedGallery = await uploadGalleryImages(galleryFiles);
    const project = await SignatureProject.create({
      ...normalizeProjectPayload(req.body),
      image: uploadedImage.url,
      imagePublicId: uploadedImage.publicId,
      ...uploadedGallery,
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message || "Unable to create project" });
  }
};

const updateSignatureProject = async (req, res) => {
  try {
    const project = await SignatureProject.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const update = normalizeProjectPayload(req.body);
    const mainImage = req.file || req.files?.image?.[0];
    const galleryFiles = req.files?.galleryImages || [];

    if (mainImage) {
      const uploadedImage = await uploadImage(mainImage);
      update.image = uploadedImage.url;
      update.imagePublicId = uploadedImage.publicId;

      await deleteImage(project.imagePublicId);
    }

    
    if (galleryFiles.length > 0) {
      const uploadedGallery = await uploadGalleryImages(galleryFiles);
      update.galleryImages = uploadedGallery.galleryImages;
      update.galleryImagePublicIds = uploadedGallery.galleryImagePublicIds;

      await Promise.all((project.galleryImagePublicIds || []).map((publicId) => deleteImage(publicId)));
    }

    Object.assign(project, update);
    await project.save();

    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message || "Unable to update project" });
  }
};

const deleteSignatureProject = async (req, res) => {
  try {
    const project = await SignatureProject.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await deleteImage(project.imagePublicId);
    await Promise.all((project.galleryImagePublicIds || []).map((publicId) => deleteImage(publicId)));
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(400).json({ message: "Unable to delete project" });
  }
};

module.exports = {
  getPublicSignatureProjects,
  getPublicSignatureProjectById,
  getAdminSignatureProjects,
  createSignatureProject,
  updateSignatureProject,
  deleteSignatureProject,
};
