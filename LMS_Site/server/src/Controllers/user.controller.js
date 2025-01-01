const User=require("../Models/User.Model");
const bcrypt=require("bcryptjs")
const genrateToken=require("../utils/genrateToken");
async function signUp(req,res)
{
    try {
        
        const {name,email,password}=req.body;

        if(!name||!email||!password)
        {
            res.status(400).json({
                success:false,
                message:"All fields are required"
            })
            return;
        }

        const findUser=await User.findOne({email});
        if(findUser)
        {
            res.status(400).json({
                success:false,
                message:"User already Reqistered"
            })
            return;
        }

        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await User.create({name,email,password:hashedPassword});

        res.status(201).json({
            success:true,
            message:"User Registered Successful",
            
        })

        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

async function login(req,res)
{

    try {
        const {email,password}=req.body;
        if(!email||!password)
            {
                res.status(400).json({
                    success:false,
                    message:"All fields are required"
                })
                return;
            }

        const findUser=await User.findOne({email});
        if(!findUser)
        {
            res.status(400).json({
                success:false,
                message:"invalid Email or Password"
            })
            return;
        }
        
        if(!await bcrypt.compare(password,findUser.password))
        {
            res.status(400).json({
                success:false,
                message:"invalid Email or Password"
            })
            return;
        }


        genrateToken(res,findUser,"WelCome Back to E-Learning")
        return;
        
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

module.exports={login,signUp}