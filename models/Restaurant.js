const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Restaurant = new Schema({
    img: String,
    name: String,
    description: String,
})

module.exports = mongoose.model('Restaurant', Restaurant)