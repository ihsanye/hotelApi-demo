const { updateUser, deleteUser, detailUser, allUser } = require('../controllers/user.js')
const express = require('express')

const router = express.Router()

router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)
router.get('/detailUser/:id', detailUser)
router.get('/allUser', allUser)

module.exports = router
