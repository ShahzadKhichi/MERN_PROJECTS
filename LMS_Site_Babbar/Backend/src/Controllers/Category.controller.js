const Category = require("../Models/Category.model");

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(401).json({
        success: false,
        message: "All fields are requried",
      });
    }

    const category = await Category.create({ name, description });

    return res.status(201).json({
      category,
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    console.log("error in creating Category", error);

    return res.status(500).json({
      success: false,
      messsage: "internel server error",
    });
  }
};

exports.showAllCategories = async (req, res) => {
  try {
    const Categories = await Category.find(
      {},
      { name: true, description: true }
    );

    return res.status(200).json({
      Categories,
      success: true,
      message: "Categories get successfully",
    });
  } catch (error) {
    console.log("error in creating Category", error);

    return res.status(500).json({
      success: false,
      messsage: "internel server error",
    });
  }
};

exports.categoryPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body;

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "All fields are requried",
      });
    }

    const selectedCourses = await Category.findById(categoryId)
      .populate("course")
      .exec();

    const differentCourses = await Category.findById({
      _id: { $ne: categoryId },
    })
      .populate("course")
      .exec();

    if (!selectedCourses) {
      return res.status(404).json({
        success: false,
        message: "category not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "detials get successfully",
      selectedCourses,
      differentCourses,
    });
  } catch (error) {
    console.log("Error in category page details", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};
