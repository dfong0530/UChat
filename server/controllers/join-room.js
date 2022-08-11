const RoomQueue = require('../models/join-room');
const { AddRoomToUser, UpdateFriend } = require('./auth');
const { CreateRoom, AddMessage, UpdateUserTwo} = require('../controllers/rooms');
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

const JoinRoom = async(userId, username, otherCountry, country) => {
    const OtherQueue = await RoomQueue.findOne({country: otherCountry});
    const SameQueue = await RoomQueue.findOne({country});      

    let ret = {roomNum: null, roomID: null, otherUser: null, secondUser: false}                      

    if(OtherQueue.waiting.length === 0){       
        ret.roomNum = uuid.v1();

        ret.otherUser = {roomNum: ret.roomNum, userId: uuid.v1(), username: "Anonymous"};
        const {roomID} = await CreateRoom({_id: userId, username: username}, {_id: ret.otherUser.userId, username: ret.otherUser.username}, ret.roomNum);
        SameQueue.waiting.push({roomID: String(roomID), roomNum: ret.roomNum, userId, username, _id: uuid.v1()});
        ret.roomID = String(roomID);
        await RoomQueue.findByIdAndUpdate({_id: SameQueue._id}, {waiting: SameQueue.waiting});
    }
    else{
        ret.otherUser  = OtherQueue.waiting.shift();
        ret.roomNum = ret.otherUser.roomNum;
        ret.roomID = ret.otherUser.roomID
        ret.secondUser = true;

        await UpdateUserTwo(ret.roomID, {_id: userId, username});
        await UpdateFriend(ret.otherUser.userId, ret.roomID, username);
        await RoomQueue.findByIdAndUpdate({_id: OtherQueue._id}, {waiting: OtherQueue.waiting});
    }  

    await AddRoomToUser(userId, ret.roomID, ret.otherUser.username);
    return {roomNum: ret.roomNum, roomID: ret.roomID, friendUsername: ret.otherUser.username, secondUser: ret.secondUser}
}

module.exports = {
    JoinRoom
}