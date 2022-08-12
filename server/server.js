const express = require('express');
const app = express();
const { Server } = require('socket.io')
const http = require('http');
const cors = require('cors');
const uuid = require('uuid');
const authRouter = require('./routes/auth');
const roomsRouter = require('./routes/rooms');
const { JoinRoom } = require('./controllers/join-room');
const { AddMessage } = require('./controllers/rooms');

require('dotenv').config();
require('./db/config');

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/rooms", roomsRouter);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', socket => {

    socket.on('join-room', async({ userID, username, inUkraine }) => {
        console.log("join room");
        const ret = await JoinRoom(userID, username, inUkraine ? '*' : 'Ukraine', inUkraine ? 'Ukraine' : '*');

        if(ret.secondUser){
            socket.broadcast.to(ret.roomNum).emit("friend-joined", {username, roomID: ret.roomID});
        }

        socket.emit("join-room", {friendUsername: ret.friendUsername, roomID: ret.roomID, roomNum: ret.roomNum });
    });

    socket.on('switch-room', room => {
        console.log("switch room");
        socket.join(room);
    }); 

    socket.on('leave-room', room => {
        console.log("leave-room");
        socket.leave(room);
    })

    socket.on('message', async({ userID, roomID, message, roomNum, donation, donationAmount }) => {
        console.log('message');
        const _id = uuid.v1();

        await AddMessage(roomID, userID, message, _id, donation, donationAmount);
        io.in(roomNum).emit('message', {_id, userID, message, donation, donationAmount});
    }); 
});

server.listen(5000, () => {
    console.log("Listening on port 5000");
})