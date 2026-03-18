import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const url = process.env.DB_URL || "";
        if (!url) {
            throw new Error("DB url is not found environment variables");
        }
        await mongoose.connect(url, { dbName: "Chat-App" });
        console.log("✅ connected to mongodb");
    }
    catch (error) {
        console.error(" ❌ error in database connection", error);
        process.exit(1);
    }
};
export default connectDB;
