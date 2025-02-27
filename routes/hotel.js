const { createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotel, typeByCount, typeByCity } = require('../controllers/hotel.js')
const express = require('express')

const router = express.Router()

router.get('/typeByCount', typeByCity)
router.get('/typeByCity', typeByCity)
router.post('/createHotel', createHotel)
router.put('/updateHotel/:id', updateHotel)
router.delete('/deleteHotel/:id', deleteHotel)
router.get('/getSingleHotel/:id', getSingleHotel)
router.get('/getAllHotel/:id', getAllHotel)

module.exports = router