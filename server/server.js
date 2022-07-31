const express = require('express');
const app = express();
const { Server } = require('socket.io')
const http = require('http');
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});


//IO Stuff


server.listen(5000, () => {
    console.log("Listening on port 5000");
})