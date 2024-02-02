const express = require("express")
const { getSingleDoctor, getAllDoctor, updateDoctor, deleteDoctor } = require("../controllers/doctorController")

const { authenticate, restrict } = require("../auth/verifyToken");

const reviewRouter = require("./review");

const router = express.Router()

//nested route
router.use('/:doctorId/reviews', reviewRouter);

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.put('/:id',authenticate, restrict(['doctor']), updateDoctor)
router.delete('/:id',authenticate, restrict(['doctor']), deleteDoctor)

module.exports= router