const express = require('express')
const router = express.Router()
const ingredientsController = require('../controllers/ingredients') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/:id', ensureAuth, ingredientsController.getIngredients)

router.post('/:id', ingredientsController.addIngredients)

module.exports = router