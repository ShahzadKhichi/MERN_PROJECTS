const mongoose = require("mongoose");
require("dotenv").config({});
const URL = process.env.DB_URL;

exports.connectDB = async () => {
  try {
    return await mongoose.connect(URL);
  } catch (error) {
    console.error(error);
  }
};
