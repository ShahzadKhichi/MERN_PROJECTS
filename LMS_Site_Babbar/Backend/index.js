const express = require("express");
const { connectDB } = require("./src/Config/database");
const connectCloudinary = require("./src/Config/cloudinary");
const fileUpload = require("express-fileupload");

const cookieParser = require("cookie-parser");
const cors = require("cors");

//routers import

const userRouter = require("./src/Routes/user.routes");
const courseRouter = require("./src/Routes/course.routes");
const profileRouter = require("./src/Routes/profile.routes");

const app = express();
app.use(cors({}));

app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./temp",
  })
);

//routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/profile", profileRouter);

app.get("*", (req, res) => {
  res.status(200).json({
    active: true,
    message: "Server is up and running",
  });
});

async function startApp() {
  try {
    await connectDB();
    connectCloudinary();
    console.log("DB connected");
    app.listen(4000, () => {
      console.log("server is listing on port " + 4000);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
