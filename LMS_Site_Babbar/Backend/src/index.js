const express = require("express");
const { connectDB } = require("./Config/database");

const app = express();

async function startApp() {
  try {
    await connectDB();
    console.log("DB connected");
    app.listen(3000, () => {
      console.log("server is listing on port " + 3000);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
