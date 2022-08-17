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
    name: {
        type: String,
        requried: true
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
        type: [{roomID: {type: String, required: true}, name: {type: String, rquired: true}, location: {type: String, required: true}}],
        default: []
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('users', AuthShema);