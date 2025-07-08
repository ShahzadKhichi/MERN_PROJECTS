const SubSection = require("../Models/SubSection.model");
const Section = require("../Models/Section.model");
const { uploadImage } = require("../utils/imageUploader");

exports.createSubSection = async (req, res) => {
  try {
    const { title, description, timeDuration, sectionId } = req.body;
    const video = req.files.video;

    if (!title || !description || !timeDuration || !sectionId) {
      return res.status(401).json({
        message: "All fields are requried",
        success: false,
      });
    }

    let section = await Section.findById(sectionId);
    if (!section) {
      return res.status(401).json({
        message: "Invalid section id",
        success: false,
      });
    }

    const videoUrl = await uploadImage(video, process.env.FOLDER).secure_url;
    //creating subsection
    const subSection = await SubSection.create({
      title,
      description,
      timeDuration,
      videoUrl,
      section: section._id,
    });

    //updating section

    section = await section.updateOne(
      {
        $push: {
          subSections: subSection._id,
        },
      },
      { new: true }
    );
    section = await section.save();

    return res.status(201).json({
      success: true,
      message: "Sub section created successfully",
      updatedSection: section,
    });
  } catch (error) {
    console.log("error in creating sub section");
    return res.status(500).json({
      success: false,
      message: "error in creating subsection",
    });
  }
};
