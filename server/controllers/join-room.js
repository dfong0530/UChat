const RoomQueue = require('../models/join-room');
const { AddRoomToUser, UpdateFriend } = require('./auth');
const { CreateRoom, UpdateUserTwo} = require('../controllers/rooms');
const uuid = require('uuid');

/*
    If Queue Empty --> Create RoomID, add User into Queue

    If not Emtpy --> Pop From Queue acess RoomID,

    Get Username of other person if there is one.

    Update The Users table with new roomID
    Update The Rooms table with new room
    Update the Queue

    Return The Room Num, RoomID, and current Messages, username
*/

const JoinRoom = async(userId, name, otherCountry, country) => {
    const OtherQueue = await RoomQueue.findOne({country: otherCountry});
    const SameQueue = await RoomQueue.findOne({country});      

    let ret = {roomNum: null, roomID: null, otherUser: null, secondUser: false}                      

    if(OtherQueue.waiting.length === 0){       
        ret.roomNum = uuid.v1();

        ret.otherUser = {roomNum: ret.roomNum, userId: uuid.v1(), name: "Anonymous"};
        const {roomID} = await CreateRoom({_id: userId, name: name}, {_id: ret.otherUser.userId, name: ret.otherUser.name}, ret.roomNum);
        SameQueue.waiting.push({roomID: String(roomID), roomNum: ret.roomNum, userId, name, _id: uuid.v1()});
        ret.roomID = String(roomID);
        await RoomQueue.findByIdAndUpdate({_id: SameQueue._id}, {waiting: SameQueue.waiting});
    }
    else{
        ret.otherUser  = OtherQueue.waiting.shift();
        ret.roomNum = ret.otherUser.roomNum;
        ret.roomID = ret.otherUser.roomID
        ret.secondUser = true;

        await UpdateUserTwo(ret.roomID, {_id: userId, name});
        await UpdateFriend(ret.otherUser.userId, ret.roomID, name);
        await RoomQueue.findByIdAndUpdate({_id: OtherQueue._id}, {waiting: OtherQueue.waiting});
    }  

    await AddRoomToUser(userId, ret.roomID, ret.otherUser.name);
    return {roomNum: ret.roomNum, roomID: ret.roomID, friendName: ret.otherUser.name, secondUser: ret.secondUser}
}

module.exports = {
    JoinRoom
}