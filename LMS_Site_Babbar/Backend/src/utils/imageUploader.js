const cloudinary = require("cloudinary").v2;
const fs = require("node:fs/promises");

exports.uploadImage = async (file, folder, height, quality) => {
  const options = { folder };
  if (height) {
    options.height = height;
  }

  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  const res = await cloudinary.uploader.upload(file.tempFilePath, options);
  await fs.unlink(file.tempFilePath);

  return res;
};
exports.deleteOldImage = async (url) => {
  const segments = url.split("/");
  const id = segments.pop().split(".")[0];
  const publicId = segments.pop() + "/" + id;

  return await cloudinary.uploader.destroy(publicId, {
    resource_type: "image",
  });
};
