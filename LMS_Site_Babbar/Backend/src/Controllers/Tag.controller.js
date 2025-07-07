const Tag = require("../Models/Tag.model");

exports.createTag = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(401).json({
        success: false,
        message: "All fields are requried",
      });
    }

    const tag = await Tag.create({ name, description });

    return res.status(201).json({
      tag,
      success: true,
      message: "Tag created successfully",
    });
  } catch (error) {
    console.log("error in creating tag", error);

    return res.status(500).json({
      success: false,
      messsage: "internel server error",
    });
  }
};

exports.showAllTags = async (req, res) => {
  try {
    const tags = await Tag.find({}, { name: true, description: true });

    return res.status(200).json({
      tags,
      success: true,
      message: "Tags get successfully",
    });
  } catch (error) {
    console.log("error in creating tag", error);

    return res.status(500).json({
      success: false,
      messsage: "internel server error",
    });
  }
};
