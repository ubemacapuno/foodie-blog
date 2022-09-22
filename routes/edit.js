const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteDish)
router.post('/:id', editController.updateDish)

module.exports = router