

const Booking = require("../models/BookingSchema");
const Doctor = require("../models/DoctorSchema");
const User = require("../models/UserSchema")

//GET SINGLE USER
const getSingleUser = async(req,res) =>{
    const id = req.params.id
    try{
        const user = await User.findById(id);
        res.status(200).json({status: true, message: "User Found", data: user});

    }catch(err){
        res.status(404).json({status: false, message: "No user found"}); 

    }
}

//GET ALL USER
const getAllUser = async(req,res) =>{
    try{
        const users = await User.find({});
        res.status(200).json({status: true, message: "Users Found", data: users});

    }catch(err){
        res.status(404).json({status: false, message: "Not found"}); 

    }
}

//FOR USER PROFILE
const getUserProfile = async(req,res) =>{
    const userId = req.userId;

    try{
        const user = await User.findById(userId)

        if(!user){
            return res.status(404).json({success : false, message: "User not found"})
        }
        const {password, ...rest} = user._doc
        res.status(200).send({success : true, message: "Profile is getting", data: {...rest}})

    }catch(err){
        console.log(err)
    }
}

//FOR APPOINTMENT

const getMyAppointments=async(req,res)=>{

    try{

        //1st step: retrieve appointments from bookings for specific user

        const bookings = await Booking.find({user: req.userId})

        //2ns steps: extract doctor ids from appointment booking
        const doctorIds = bookings.map(ele => ele.doctor.id)

        //3rd step: retrieve doctors using doctor ids
          const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password')
          res.status(200).send({success: true, message: 'Appointments are getting', data: doctors})
    }catch(err){
        console.log(err)
        res.status(505).send({success: false, message: "something wrong in appontments api"})
    }

}






//UPDATE USER
const updateUser = async(req,res) =>{
    const id = req.params.id
    try{
        const updateUser = await User.findByIdAndUpdate(id,{$set: req.body}, {new:true});
        res.status(200).json({status: true, message: "Successfully Updated", data: updateUser});

    }catch(err){
        res.status(500).json({status: false, message: "failed Updated"}); 

    }
}

//DELETE USER
const deleteUser = async(req,res) =>{
    const id = req.params.id
    try{
        await User.findByIdAndDelete(id);
        res.status(200).json({status: true, message: "Successfully deleted"});

    }catch(err){
        res.status(500).json({status: false, message: "failed to delete"}); 

    }

}

module.exports = {updateUser, getSingleUser, deleteUser, getAllUser, getMyAppointments, getUserProfile}