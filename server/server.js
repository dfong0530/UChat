const express = require("express");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const uuid = require("uuid");
const authRouter = require("./routes/auth");
const roomsRouter = require("./routes/rooms");
const mapRouter = require("./routes/maps");
const { JoinRoom } = require("./controllers/join-room");
const { AddMessage } = require("./controllers/rooms");

require("dotenv").config();
require("./db/config");

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/rooms", roomsRouter);
app.use("/api/v1/maps", mapRouter);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("join-room", async ({ userID, name, inUkraine, location }) => {
    console.log("join room");

    const ret = await JoinRoom(userID, name, inUkraine ? "*" : "Ukraine", inUkraine ? "Ukraine" : "*", location);

    if (ret.secondUser) {
      socket.broadcast
        .to(ret.roomNum)
        .emit("friend-joined", { name, roomID: ret.roomID, location });
    }

    socket.emit("join-room", {friendName: ret.friendName, roomID: ret.roomID, roomNum: ret.roomNum, location: ret.location});
  });

  socket.on("switch-room", (room) => {
    console.log("switch room");
    socket.join(room);
  });
  

  socket.on("leave-room", (room) => {
    console.log("leave-room");
    socket.leave(room);
  });

  socket.on("message", async ({ userID, roomID, message, roomNum, donation, donationAmount }) => {
      console.log("message");
      const _id = uuid.v1();

      await AddMessage(roomID, userID, message, _id, donation, donationAmount);
      io.in(roomNum).emit("message", {_id, userID, message, donation, donationAmount});
    }
  );
});

server.listen(5000, () => {
  console.log("Listening on port 5000");
});
