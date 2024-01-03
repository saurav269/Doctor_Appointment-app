const express = require("express")
const { getSingleDoctor, getAllDoctor, updateDoctor, deleteDoctor } = require("../controllers/doctorController")

const router = express.Router()

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.put('/:id', updateDoctor)
router.delete('/:id', deleteDoctor)

module.exports= router