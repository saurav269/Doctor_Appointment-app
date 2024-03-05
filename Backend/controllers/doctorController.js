 const Doctor = require("../models/DoctorSchema");
 const Booking = require("../models/BookingSchema")

//GET SINGLE DOCTOR
const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");
    res
      .status(200)
      .json({ status: true, message: "Doctor Found", data: doctor });
  } catch (err) {
    res.status(404).json({ status: false, message: "No doctor found" });
  }
};

//GET ALL doctor
const getAllDoctor = async (req, res) => {
  let doctors;
  try {
    const { query } = req.query;
    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password")
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select("-password");
    }
    res
      .status(200)
      .json({ status: true, message: "Doctors Found", data: doctors });
  } catch (err) {
    res.status(404).json({ status: false, message: "Not found" });
  }
};

//GET DOCTORS PROFILE
    const getDoctorProfile=async(req,res)=>{
      const doctorId = req.userId;

    try{
        const doctor = await Doctor.findById(doctorId)

        if(!doctor){
            return res.status(404).json({success : false, message: "Doctor not found"})
        }
        const {password, ...rest} = doctor._doc;
        const appointments = await Booking.find({doctor: doctorId})
        res.status(200).send({success : true, message: "Profile is getting", data: {...rest, appointments}})

    }catch(err){
        console.log(err)
        return res.status(500).json({success : false, message: "Doctor not found, in doctorProfile"})
    }

    }

//UPDATE Doctor
const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res
      .status(200)
      .json({
        status: true,
        message: "Successfully Updated",
        data: updateDoctor,
      });
  } catch (err) {
    res.status(500).json({ status: false, message: "failed Updated" });
  }
};

//DELETE USER
const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({ status: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({ status: false, message: "failed to delete" });
  }
};

module.exports = { updateDoctor, getAllDoctor, getSingleDoctor, deleteDoctor, getDoctorProfile };
