const mongoose=require("mongoose")

const userShcema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:
    {
        type:String,
        required:true,
    },
    role:
    {
        type:String,
        enum:["student","instructor"],
        default:"student"
    },
    courses:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Course"
    },
    photoUrl:
    {
        type:String,
        default:""
    }
},{timestamps:true});



const User=mongoose.model("user",userShcema);

module.exports=User;

