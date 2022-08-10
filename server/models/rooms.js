const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    roomNum: {
        type: String,
        required: true
    },
    userOne: {
        type: {_id: String, username: String},
        required: true
    },
    userTwo: {
        type: {_id: String, username: String},
        required: true
    },
    messages: {
        type: [{_id: String, userID: String, message: String}],
        default: [],
        required: true
    }
},{
    versionKey: false
});

module.exports = mongoose.model('rooms', RoomSchema);