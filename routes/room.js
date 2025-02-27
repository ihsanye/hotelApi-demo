const { createRoom, updateRoom, deleteRoom, getDetailRoom, getAllRoom } = require('../controllers/room.js')

const express = require('express')
const router = express.Router

router.post('/createRoom/:id/:hotelid', createRoom)
router.put('/updateRoom/:id', updateRoom)
router.delete('/deleteRoom/:id/:hotelid', deleteRoom)
router.get('/getDetailRoom/:id', getDetailRoom)
router.get('/getAllRoom', getAllRoom)

module.exports = router