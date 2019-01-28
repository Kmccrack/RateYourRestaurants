const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    password: String,
    restaurants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Restaurant'
        }
    ]
})

module.exports = mongoose.model('User', User)