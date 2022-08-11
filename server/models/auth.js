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
        type: [{roomID: String, friendUsername: String}],
        default: []
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('users', AuthShema);