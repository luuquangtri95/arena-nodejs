const express = require('express')
const router = express.Router()
const Controller = require('../controllers/product')

router.get('/products')
router.post('/products', Controller.uploadImg, Controller.create)
router.get('/products/:id')
router.put('/products/:id')
router.delete('/products/:id')

module.exports = router
