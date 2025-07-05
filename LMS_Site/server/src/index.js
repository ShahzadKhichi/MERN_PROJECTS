const express = require("express");
const dbConnect = require("./DB/dbConnect");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config({});
const app = express();
const cors = require("cors");
const userRoutes = require("./Routes/user.routes");

//default middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

//apis
app.use("/api/v1/user", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
dbConnect();
