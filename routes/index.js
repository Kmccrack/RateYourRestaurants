const express = require('express')
const router = express.Router()
const userCon = require('../controllers/userCon')
const restaurantCon = require('../controllers/restaurantCon')

router.get('/api/users', userCon.index)
router.post('/api/users/', userCon.create)
router.get('/api/users/:id', userCon.show)
router.patch('/api/users/:id', userCon.update)
router.delete('/api/users/:id', userCon.delete)

router.get('/api/users/:userId/restaurants', restaurantCon.index)
router.get('/api/restaurants/:restaurantId', restaurantCon.show)
router.delete('/api/restaurants/:restaurantId', restaurantCon.delete)
router.patch('/api/restaurants/:restaurantId', restaurantCon.update)
router.post('/api/users/:userId/restaurants', restaurantCon.create)




module.exports = router