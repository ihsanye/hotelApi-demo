const { createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotel, typeByCount, typeByCity } = require('../controllers/hotel.js')
const { verifyAdmin } = require('../middleware/verify.js')
const express = require('express')

const router = express.Router()

router.get('/typeByCount', typeByCity)
router.get('/typeByCity', typeByCity)
router.post('/createHotel', verifyAdmin, createHotel)
router.put('/updateHotel/:id', verifyAdmin, updateHotel)
router.delete('/deleteHotel/:id', verifyAdmin, deleteHotel)
router.get('/getSingleHotel/:id', getSingleHotel)
router.get('/getAllHotel/:id', getAllHotel)

module.exports = router