const User = require('../models/User')
const Restaurant = require('../models/Restaurant')

const restaurantCon = {
    index: (req, res) => {
        var userId = req.params.userId
        User.findById(userId).populate('restaurants')
            .then((user) => {
                res.send(user.restaurants)
            })
    },
    show: (req, res) => {
        var restaurantId = req.params.restaurantId
        Restaurant.findById(restaurantId)
            .then((restaurant) => {
                res.send(restaurant)
            })
    },
    delete: (req, res) => {
        var restaurantId = req.params.restaurantId
        Restaurant.findByIdAndDelete(restaurantId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var restaurantId = req.params.restaurantId
        Restaurant.findByIdAndUpdate(restaurantId, req.body, { new: true })
            .then((updatedrestaurant) => {
                updatedrestaurant.save()
                res.send(updatedrestaurant)
            })
    },
    create: (req, res) => {
        var userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                console.log(user)
                Restaurant.create(req.body)
                    .then((newRestaurant) => {
                        console.log(newRestaurant)
                        user.ideas.push(newRestaurant)
                        user.save()
                        res.send(newRestaurant)
                    })
            })
    }

}

module.exports = restaurantCon