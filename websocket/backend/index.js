const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const cors = require('cors');
// const { Server } = require("ws");
const { socket } = require("dgram");
const app = express();
app.use(cors());


const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET', 'POST']
    }
});

io.on('connection', (Socket) => {
    socket.on('send_message', (data) => {
        console.log(data);
        socket.broadcast.emit('receive_message', data);
    });

    socket.on('disconnect', () => {
        console.log('User Disconnected', socket.id);
    });
});

server.listen(5000, () => {
    console.log("Server running on 5000 port");
})