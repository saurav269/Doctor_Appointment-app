const express = require("express")
const { getSingleDoctor, getAllDoctor, updateDoctor, deleteDoctor } = require("../controllers/doctorController")

const router = express.Router()

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.put('/:id',authenticate, restrict(['doctor']), updateDoctor)
router.delete('/:id',authenticate, restrict(['doctor']), deleteDoctor)

module.exports= router