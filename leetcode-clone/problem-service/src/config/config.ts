import mongoose from "mongoose";
import logger from "./logger.config";
import { serverConfig } from ".";

export const connectDB = async () => {
    try {
        await mongoose.connect(serverConfig.MONGO_URI);

        mongoose.connection.on("connected", () => {
            logger.info("Database connected successfully");
        });

        mongoose.connection.on("error", (error) => {
            logger.error("Error connecting to database", error);
        });
        mongoose.connection.on("disconnected", () => {
            logger.info("Database disconnected");
            process.exit(0);
        });
    } catch (error) {
        logger.error("Error connecting to database", error);
        process.exit(1);
    }
}