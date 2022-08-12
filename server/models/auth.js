const mongoose = require('mongoose');

const AuthShema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        requried: true
    },
    inUkraine: {
        type: Boolean,
        required: true
    },
    rooms: {
        type: [{roomID: {type: String, required: true}, friendUsername: {type: String, rquired: true}}],
        default: []
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('users', AuthShema);