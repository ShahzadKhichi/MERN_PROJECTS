const express = require("express");
const { connectDB } = require("./Config/database");

const cookieParser = require("cookie-parser");
const cors = require("cors");

//routers import

const authRouter = require("./Routes/auth.routes");

const app = express();
app.use(cors({}));

app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1", authRouter);

async function startApp() {
  try {
    await connectDB();
    console.log("DB connected");
    app.listen(4000, () => {
      console.log("server is listing on port " + 4000);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
