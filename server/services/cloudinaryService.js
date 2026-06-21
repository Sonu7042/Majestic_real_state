const cloudinary = require("../config/cloudinary");

const ensureCloudinaryConfig = () => {
  const required = [
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
  ];

  const missing = required.filter((key) => !process.env[key]?.trim());

  if (missing.length > 0) {
    throw new Error(`Missing Cloudinary env values: ${missing.join(", ")}`);
  }
};

const isStaleTimestampError = (error) =>
  /stale request|reported time|more than 1 hour/i.test(error?.message || "");

const formatCloudinaryError = (error) => {
  if (!isStaleTimestampError(error)) {
    return error;
  }

  const details = error.message ? ` Cloudinary said: ${error.message}` : "";
  return new Error(
    `Cloudinary rejected the upload timestamp. Check that the server computer clock is set to the correct date and time, then try again.${details}`
  );
};

const uploadImageOnce = (file, folder) =>
  new Promise((resolve, reject) => {
    const uploadOptions = {
      folder,
      resource_type: "image",
    };

    const stream = cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve({
          url: result.secure_url,
          publicId: result.public_id,
        });
      }
    );

    stream.end(file.buffer);
  });

const uploadImage = async (file, folder = "elitepro/signature-projects") => {
  ensureCloudinaryConfig();

  try {
    return await uploadImageOnce(file, folder);
  } catch (error) {
    if (!isStaleTimestampError(error)) {
      throw error;
    }

    try {
      return await uploadImageOnce(file, folder);
    } catch (retryError) {
      throw formatCloudinaryError(retryError);
    }
  }
};

const deleteImage = async (publicId) => {
  if (!publicId) return;

  ensureCloudinaryConfig();
  await cloudinary.uploader.destroy(publicId);
};

module.exports = {
  uploadImage,
  deleteImage,
};
