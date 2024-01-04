
const jwt = require('jsonwebtoken')
const Doctor = require('../models/DoctorSchema')
const User = require('../models/UserSchema')


const authenticate = async(req,res,next) =>{
    
    //GET TOKEN FROM HEADERS
    const authToken = req.headers.authorization;

    //CHECK TOKEN IS EXISTS
    if(!authToken || !authToken.startsWith("Bearer")){
        return res.status(401).json({success:false, message : "No token found, authorization failed"})
    }

    try{
        // console.log(authToken)
        const token = authToken.split(" ")[1];
        //VERIFY TOKEN
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = decoded.id
        req.role = decoded.role
        next();

    }catch(err){
       if(err.name === 'TokenExpiredError'){
        return res.status(401).json({message : "Token is expired"})
       }
       return res.status(401).json({message : "Invalid Token"})
    }
}

//FOR ADMIN RESTRICTION. USE BY ONLY ADMIN
const restrict= roles => async(req,res,next)=>{
    const userId = req.userId
    let user;
    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if(patient){
        user = patient
    }
    if(doctor){
        user = doctor
    }
    if(!roles.includes(user.role)){
        return res.status(401).json({status:false, message:"You are not authorised"})
    }
    next()
}
module.exports = {authenticate, restrict}