const express = require("express");
const { connectDB } = require("./src/Config/database");
const connectCloudinary = require("./src/Config/cloudinary");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Routes import
const userRouter = require("./src/Routes/user.routes");
const courseRouter = require("./src/Routes/course.routes");
const profileRouter = require("./src/Routes/profile.routes");
const paymentRouter = require("./src/Routes/payment.routes");
const contactRouter = require("./src/Routes/contact.routes");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./temp",
  })
);

// Routes
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/reach", contactRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    active: true,
    message: "Server is running",
  });
});

async function startApp() {
  try {
    await connectDB();
    connectCloudinary();
    console.log("DB connected");
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
