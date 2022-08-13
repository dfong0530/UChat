const mongoose = require('mongoose');
const { stringify } = require('uuid');

const RoomSchema = new mongoose.Schema({
    roomNum: {
        type: String,
        required: true
    },
    userOne: {
        type: {_id: {type: String, required: true}, name: {type: String, required: true}},
        required: true
    },
    userTwo: {
        type: {_id: {type: String, required: true}, name: {type: String, required: true}},
        required: true
    },
    messages: {
        type: [{_id: {type: String, required: true}, userID: {type: String, required: true}, message: {type: String, required: true}, donation: {type: Boolean, required: true}, donationAmount: {type: Number, required: true}}],
        default: [],
        required: true
    }
},{
    versionKey: false
});

module.exports = mongoose.model('rooms', RoomSchema);