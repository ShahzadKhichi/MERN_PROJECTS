import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express();

const PORT:string=process.env.PORT||"5001";

app.listen(PORT,()=>{
    console.log(`Mail Server is running on PORT:${PORT}`);
    
})