const Blog = require("../models/Blog");
const { deleteImage, uploadImage } = require("../services/cloudinaryService");

const normalizeBlogPayload = (body) => {
  const payload = {};
  const stringFields = ["title", "excerpt", "content", "category"];

  stringFields.forEach((field) => {
    if (body[field] !== undefined) {
      payload[field] = body[field];
    }
  });

  if (body.date !== undefined) {
    payload.date = body.date ? new Date(body.date) : new Date();
  }

  if (body.sortOrder !== undefined) {
    payload.sortOrder = Number(body.sortOrder || 0);
  }

  if (body.isActive !== undefined) {
    payload.isActive = body.isActive !== "false";
  }

  return payload;
};

const getPublicBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isActive: true })
      .sort({ sortOrder: 1, date: -1, createdAt: -1 })
      .lean();

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Unable to load blogs" });
  }
};

const getPublicBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      _id: req.params.id,
      isActive: true,
    }).lean();

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    res.status(404).json({ message: "Blog not found" });
  }
};

const getAdminBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .sort({ sortOrder: 1, date: -1, createdAt: -1 })
      .lean();

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Unable to load blogs" });
  }
};

const createBlog = async (req, res) => {
  try {
    const blogImage = req.file;

    if (!blogImage) {
      return res.status(400).json({ message: "Blog image is required" });
    }

    const uploadedImage = await uploadImage(blogImage, "elitepro/blogs");
    const blog = await Blog.create({
      ...normalizeBlogPayload(req.body),
      image: uploadedImage.url,
      imagePublicId: uploadedImage.publicId,
    });

    res.status(201).json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message || "Unable to create blog" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const update = normalizeBlogPayload(req.body);
    const blogImage = req.file;

    if (blogImage) {
      const uploadedImage = await uploadImage(blogImage, "elitepro/blogs");
      update.image = uploadedImage.url;
      update.imagePublicId = uploadedImage.publicId;

      await deleteImage(blog.imagePublicId);
    }

    Object.assign(blog, update);
    await blog.save();

    res.json(blog);
  } catch (error) {
    res.status(400).json({ message: error.message || "Unable to update blog" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await deleteImage(blog.imagePublicId);
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(400).json({ message: "Unable to delete blog" });
  }
};

module.exports = {
  getPublicBlogs,
  getPublicBlogById,
  getAdminBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
