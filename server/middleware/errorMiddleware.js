const multer = require("multer");

const errorHandler = (error, req, res, next) => {
  if (error instanceof multer.MulterError || error.message) {
    return res.status(400).json({ message: error.message });
  }

  next(error);
};

module.exports = errorHandler;
