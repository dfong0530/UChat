const mongoose = require('mongoose');

const JoinRoomQueue = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    waiting: {
        type: [{roomID: String, roomNum: String, userId: String, _id: String, name: String}],
        default: []
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('join-queues', JoinRoomQueue);