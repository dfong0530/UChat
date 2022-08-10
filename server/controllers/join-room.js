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

const JoinRoom = async(userId, username) => {
    const UserQueue = await RoomQueue.findOne({});      

    let ret = {roomNum: null, roomID: null, otherUser: null, secondUser: false}                      

    if(UserQueue.waiting.length === 0 || UserQueue.waiting[0].userId === userId){       
        ret.roomNum = uuid.v1();

        ret.otherUser = {roomNum: ret.roomNum, userId: uuid.v1(), username: "Anonymous"};
        const {roomID} = await CreateRoom({_id: userId, username: username}, {_id: ret.otherUser.userId, username: ret.otherUser.username}, ret.roomNum);
        UserQueue.waiting.push({roomID: String(roomID), roomNum: ret.roomNum, userId, username, _id: uuid.v1()});
        ret.roomID = String(roomID);
    }
    else{
        ret.otherUser  = UserQueue.waiting.pop();
        ret.roomNum = ret.otherUser.roomNum;
        ret.roomID = ret.otherUser.roomID
        ret.secondUser = true;

        await UpdateUserTwo(ret.roomID, {_id: userId, username});
        await UpdateFriend(ret.otherUser.userId, ret.roomID, username);
    }  

    await AddRoomToUser(userId, ret.roomID, ret.otherUser.username);
    await RoomQueue.findByIdAndUpdate({_id: UserQueue._id}, {waiting: UserQueue.waiting});
    return {roomNum: ret.roomNum, roomID: ret.roomID, friendUsername: ret.otherUser.username, secondUser: ret.secondUser}
}

module.exports = {
    JoinRoom
}