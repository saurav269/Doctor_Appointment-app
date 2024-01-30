const express = require("express")
const { getSingleUser, getAllUser, updateUser, deleteUser } = require("../controllers/userController")
const { authenticate, restrict } = require("../auth/verifyToken")

const router = express.Router()

router.get('/:id', authenticate, restrict(['patient']), getSingleUser)
router.get('/',authenticate, restrict(['admin']), getAllUser)
router.put('/:id',authenticate, restrict(['patient']),updateUser)
router.delete('/:id',authenticate, restrict(['patient']), deleteUser)

module.exports= router