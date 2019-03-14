const Game = require("../models/Game");

let games = {};

const connectPlayer = (socket, data) => {
    games[data.room].addPlayer(data.username, socket);
    socket.join(data.room);

    // Handle Disconnection
    socket.on("disconnect", (reason) => {
        console.log(data.username + " disconnected because " + reason);
        games[data.room].deletePlayer(data.username);
        if (Object.keys(games[data.room].players).length === 0) {
            delete games[data.room];
        }
    });

    // Handle pieces fetching
    socket.on("fetch pieces", (from, callback) => {
        callback({pieces: games[data.room].fetchPieces(from)});
    });

    // Handle party launching
    socket.on("start party", (callback) => {
        if (socket.id === Object.values(games[data.room].players)[0].socket.id) {
            callback({authorizedToLaunchParty: true});
            games[data.room].gameIsStarted = true;
            socket.to(data.room).emit("launch party");
        } else {
            callback({authorizedToLaunchParty: false});
        }
    });

    // Broadcast when a opponent joins the room.
    socket.to(data.room).emit("opponent connection", {
        players: games[data.room].getPlayersInfo(),
        leaderName: games[data.room].leaderName
    });
};

const tryToConnect = (socket, data, callback) => {
    // If the room doesn't exist yet, the player create it and becomes the leader of this room.
    if (games[data.room] === undefined) {
        console.log(data.username + "is connected.");
        games[data.room] = new Game(data.room, data.username);
        connectPlayer(socket, data);
        callback({connected: true, players: {}, isRoomLeader: true});
    }
    // If nobody has the same name in the room, that the env hasn't started yet and there are less than 4 people is the room player can join the room
    else if (games[data.room].players[data.username] === undefined &&
        games[data.room].gameIsStarted !== true &&
        Object.keys(games[data.room].players).length < 4) {
        console.log(data.username + "is connected.");
        connectPlayer(socket, data);
        callback({connected: true, players: games[data.room].getPlayersInfo(), isRoomLeader: false});
    }
    // The player can not enter the room if his name is already taken.
    else if (games[data.room].players[data.username]) {
        console.log(data.username + "couldn't connect because his name is already taken.");
        callback({connected: false, error: "username already taken"});
        socket.disconnect();
    }
    // The player can not enter the room if the env has started.
    else if (games[data.room].gameIsStarted === true) {
        console.log(data.username + "couldn't connect because the games has already started.");
        callback({connected: false, error: "env is already started"});
        socket.disconnect();
    }
    // The player can not enter the room if there are already 4 people in the room.
    else if (Object.keys(games[data.room].players).length >= 4) {
        console.log(data.username + "couldn't connect because the room is full.");
        callback({connected: false, error: "room is full"});
        socket.disconnect();
    } else {
        console.log(data.username + "couldn't connect, but we don't know the reason.");
    }
};

const handleRoomConnection = (socket) => {
    socket.on("join room", (data, callback) => {
        tryToConnect(socket, data, callback)
    });
};

module.exports = {handleRoomConnection: handleRoomConnection};