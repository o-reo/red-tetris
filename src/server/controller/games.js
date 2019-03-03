const Game = require("../models/Game");

let games = {};

const connectPlayer = (socket, data) => {
    console.log(data.username + " connected");
    games[data.room].addPlayer(data.username, socket);
    socket.join(data.room);
    socket.on("disconnect", function () {
        console.log(data.username + " disconnected");
        games[data.room].deletePlayer(data.username);
    });
    socket.broadcast.emit("opponent connection", data.username);
};

const tryToConnect = (socket, data, callback) => {
    // If the room doesn't exist yet, the player create it and becomes the leader of this room.
    if (games[data.room] === undefined) {
        games[data.room] = new Game(data.room);
        connectPlayer(socket, data);
        callback({connected: true, opponentList: [], isRoomLeader: true});
    }
    // If nobody has the same name in the room, that the game hasn't started yet and there are less than 4 people is the room player can join the room
    else if (!games[data.room].playerList[data.username] &&
        games[data.room].gameIsStarted !== true &&
        games[data.room].playerList.length < 4) {
        connectPlayer(socket, data);
        callback({connected: true, opponentList: games[data.room].getOpponentList(data.username), isRoomLeader: false});
    }
    // The player can not enter the room if his name is already taken.
    else if (games[data.room].playerList[data.username]) {
        callback({connected: false, error: "username already taken"});
        socket.disconnect();
    }
    // The player can not enter the room if the game has started.
    else if (games[data.room].gameIsStarted === true) {
        callback({connected: false, error: "game is already started"});
        socket.disconnect();
    }
    // The player can not enter the room if there are already 4 people in the room.
    else if (games[data.room].playerList.length >= 4) {
        callback({connected: false, error: "room is full"});
        socket.disconnect();
    }
};

const handleRoomConnection = (socket) => {
    socket.on("join room", function (data, callback) {
        tryToConnect(socket, data, callback)
    });
};

module.exports = { handleRoomConnection: handleRoomConnection };