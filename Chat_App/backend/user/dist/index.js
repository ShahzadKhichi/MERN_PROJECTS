import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/datebase.js";
import { createClient } from "redis";
import userRoutes from "./routes/user.routes.js";
import { connectRabbitMQ } from "./config/rabbitmq.js";
dotenv.config();
const app = express();
app.use("/api/v1", userRoutes);
export const redisClient = createClient({
    url: process.env.REDIS_URL
});
redisClient.connect().then(() => {
    console.log("✅ Connected to redis");
}).catch((error) => {
    console.log("❌ redis connection failed", error);
});
connectDB();
connectRabbitMQ();
const port = Number(process.env.PORT) || 5000;
app.listen(port, () => {
    console.log(`server is running on locoalhost:${port}`);
});
//docker run -d --hostname rabbitmq-host --name rabbitmq-container -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASSWORD=admin123 -p 5672:5672 -p 15672:15672 rabbitmq:3-management
