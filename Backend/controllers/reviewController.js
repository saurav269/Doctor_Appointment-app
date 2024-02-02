const Review = require('../models/ReviewSchema');
const Doctor = require("../models/DoctorSchema");


//GET ALL REVIEWS
const getAllReviews=async(req,res)=>{

    try{
        const reviews = await Review.find({})
        res.status(200).send({
            success: true,
            message: "Successfull",
            data: reviews 
        })

    }catch(err){
        console.log(err)
        res.status(404).send({
            success: false,
            message: "Not Successfull"
        })
    }
}

//CREATE REVIEW FUNCTION
const createReview= async(req,res)=>{
    if(!req.body.doctor) req.body.doctor = req.params.doctorId

    if(!req.body.user) req.body.user = req.userId
    
    const newReview = new Review(req.body)

    try{
        const savedReview = await newReview.save()
        await Doctor.findByIdAndUpdate(req.body.doctor, {
            $push:{reviews: savedReview._id}
        })
        res.status(200).send({
            sucess: true,
            message: "Review Submitted",
            data: savedReview
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            sucess: false,
            message: "Review did not Submitted",
            err
        })

    }

}

module.exports = {getAllReviews, createReview}
