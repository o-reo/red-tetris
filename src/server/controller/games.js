const Game = require("../models/Game");

let games = {};

const connectPlayer = (socket, data) => {
    games[data.room].addPlayer(data.username);
    socket.on("disconnect", function () {
        games[data.room].deletePlayer(data.username);
        socket.disconnect();
    });
    socket.join(data.room);
    socket.broadcast.to(data.room).emit("user connection",
        {
            newUser: data.username,
            userList: games[data.room].players
        });
    console.log(games[data.room].players);
};

const handleRoomConnection = (socket) => {
    socket.on("join room", function (data, callback) {
        if (games[data.room] === undefined) {
            games[data.room] = new Game(data.room);
            connectPlayer(socket, data);
            callback({connected: true});
        } else if (!games[data.room].players.includes(data.username)) {
            connectPlayer(socket, data);
            callback({connected: true});
        } else {
            console.log("There is already a user named ", data.username, " in this room");
            callback({connected: false});
        }
    });

    socket.on("forceDisconnect", function (data) {
        games[data.room].deletePlayer(data.username);
        console.log(data.username, " just disconnected");
        socket.disconnect();
    });
};

module.exports = {
    handleRoomConnection: handleRoomConnection
};