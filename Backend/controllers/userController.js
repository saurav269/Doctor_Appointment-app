

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

module.exports = {updateUser, getSingleUser, deleteUser, getAllUser}