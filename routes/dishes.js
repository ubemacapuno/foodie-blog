const express = require('express')
const router = express.Router()
const dishesController = require('../controllers/dishes') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, dishesController.getDishes)

router.post('/createDishes', dishesController.createDishes)
module.exports = router