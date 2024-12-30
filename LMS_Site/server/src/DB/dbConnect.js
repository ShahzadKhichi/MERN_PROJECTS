const mongoose=require("mongoose");

const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DB connection Successfull");
        
    } catch (error) {

        console.error(error.message,"\n","DB Connection failed");
        
    }

}
module.exports=dbConnect