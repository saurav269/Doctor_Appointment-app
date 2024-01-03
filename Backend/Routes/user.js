const express = require("express")
const { getSingleUser, getAllUser, updateUser, deleteUser } = require("../controllers/userController")

const router = express.Router()

router.get('/:id', getSingleUser)
router.get('/', getAllUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports= router