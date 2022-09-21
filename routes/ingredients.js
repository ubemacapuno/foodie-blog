const express = require('express')
const router = express.Router()
const ingredientsController = require('../controllers/ingredients') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/:id', ensureAuth, ingredientsController.getIngredients)

router.post('/:id', ingredientsController.addIngredients)
router.get('/reset/:id', ingredientsController.resetIngredients)

//WORK IN PROGRESS!
router.post('removeIngredient/:id/:id', ingredientsController.removeIngredients)

module.exports = router