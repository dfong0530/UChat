const Rooms = require('../models/rooms');
const { Validate } = require('./auth');

const CreateRoom = async(userOne, userTwo, roomNum) => {

    try{
        const Room = await Rooms.create({roomNum, userOne, userTwo});
        return {completed: true, roomID: Room._id};
    }   
    catch(e){
        console.log(e);
        return {completed: false, roomID: null};
    }
}

const UpdateUserTwo = async(roomID, userTwo) => {
    try{

        const Room = await Rooms.findOneAndUpdate({_id: roomID}, {userTwo}, {
            new: true
        });
        
        return {completed: true, messages: Room.messages};
    }
    catch(e){
        console.log(e);
        return {completed: false, messsages: null};
    }
}

const AddMessage = async(roomID, userID, message, _id) => {

    try{
        const append = {_id, userID, message};
        await Rooms.findOneAndUpdate({_id: roomID}, {"$push": {messages: append}});
        return {completed: true}
    }
    catch(e){
        console.log(e);
        return {completed: false}
    }
}

const GetRoom = async(req, res) => {
    const {username, password} = req.headers;
    const {roomID} = req.params;
    
    try{
        const authenticated = await Validate(username, password, roomID);

        if(!authenticated){
            return res.status(401).json({status: 401, data: null})
        }

        const Room = await Rooms.findOne({_id: roomID});
        return res.status(200).json({status: 200, data: Room})
    }
    catch(e){
        console.log(e)
        return res.status(500).json({status: 500, data: null});
    }
}

module.exports = {
    CreateRoom,
    AddMessage,
    UpdateUserTwo,
    GetRoom
}