const Game = require('../models/Game');

let games = {};

function connectPlayer(socket, data) {
    games[data.room].addPlayer(data.username, socket);
    socket.join(data.room);

    // Handle Disconnection
    socket.on('disconnect', (reason) => {
        console.log(data.username + ' disconnected because ' + reason);
        games[data.room].deletePlayer(data.username);
        if (Object.keys(games[data.room].players).length === 0) {
            delete games[data.room];
        }
    });

    // Handle pieces fetching
    socket.on('fetch pieces', (from, callback) => {
        callback({pieces: games[data.room].fetchPieces(from)});
    });

    // Handle party launching
    socket.on('start party', (callback) => {
        if (socket.id === Object.values(games[data.room].players)[0].socket.id) {
            callback({authorizedToLaunchParty: true});
            games[data.room].gameIsStarted = true;
            socket.to(data.room).emit('launch party');
        } else {
            callback({authorizedToLaunchParty: false});
        }
    });

    // Broadcast when a opponent joins the room.
    socket.to(data.room).emit('opponent connection', {
        players: games[data.room].getPlayersInfo(),
        leaderName: games[data.room].leaderName
    });
}

function tryToConnect(socket, data, callback) {
    // If the room doesn't exist yet, the player create it and becomes the leader of this room.
    if (games[data.room] === undefined) {
        console.log(data.username + 'is connected.');
        games[data.room] = new Game(data.room, data.username);
        connectPlayer(socket, data);
        callback({connected: true, players: {}, isRoomLeader: true});
    }
    // If nobody has the same name in the room, that the env hasn't started yet and there are less than 4 people is the room player can join the room
    else if (games[data.room].players[data.username] === undefined &&
        games[data.room].gameIsStarted !== true &&
        Object.keys(games[data.room].players).length < 4) {
        console.log(data.username + ' is connected.');
        connectPlayer(socket, data);
        callback({connected: true, players: games[data.room].getPlayersInfo(), isRoomLeader: false});
    }
    // The player can not enter the room if his name is already taken.
    else if (games[data.room].players[data.username]) {
        console.log(data.username + ' couldn\'t connect because his name is already taken.');
        callback({connected: false, error: 'username already taken'});
        socket.disconnect();
    }
    // The player can not enter the room if the board has started.
    else if (games[data.room].gameIsStarted === true) {
        console.log(data.username + ' couldn\'t connect because the games has already started.');
        callback({connected: false, error: 'env is already started'});
        socket.disconnect();
    }
    // The player can not enter the room if there are already 4 people in the room.
    else if (Object.keys(games[data.room].players).length >= 4) {
        console.log(data.username + 'couldn\'t connect because the room is full.');
        callback({connected: false, error: 'room is full'});
        socket.disconnect();
    } else {
        console.log(data.username + ' couldn\'t connect, but we don\'t know the reason.');
    }
}

function checkAvailability(username, room) {
    console.log(username + ' wants to join room ' + room);
    let authData = {};
    // If the room doesn't exist yet, the player create it and becomes the leader of this room.
    if (games[room] === undefined) {
        authData['canConnect'] = true;
    }
    // If nobody has the same name in the room, that the env hasn't started yet and there are less than 4 people is the room player can join the room
    else if (games[room].players[username] === undefined && games[room].gameIsStarted !== true && Object.keys(games[room].players).length < 4) {
        authData['canConnect'] = true;
    }
    // The player can not enter the room.
    else {
        authData['canConnect'] = false;
        authData['reasons'] = [];
        //The username is already used in the room.
        if (games[room].players[username]) {
            authData['reasons'].push({message: 'The username is already used.' , id: 0});
        }
        // The board has already been started.
        if (games[room].gameIsStarted === true) {
            authData['reasons'].push({message: 'The board has already been started.', id: 1});
        }
        // There are already 4 people is the room.
        if (Object.keys(games[room].players).length >= 4) {
            authData['reasons'].push({message: 'The room is full.', id: 2});
        }
        if (authData['reasons'].length === 0) {
            authData['reasons'].push({message: 'Reason unknown.', id: 3});
        }
    }
    return (authData);
}

function handleRoomConnection(socket) {
    // User check for username and room availability.
    socket.on('check availability', (data, callback) => {
        const authData = checkAvailability(data.username, data.room);
        // callback(authData);
        if (authData['canConnect'] === false) {
            callback(authData);
            socket.disconnect();
        }
        callback(authData);
    });

    // User try to join room.
    socket.on('join room', (data, callback) => {
        // tryToConnect(socket, data, callback)
        const authData = checkAvailability(data.username, data.room);
        if (authData['canConnect'] === true) {
            let authData  = {connected: true};
            if (games[data.room] === undefined) {
                games[data.room] = new Game(data.room, data.username);
                authData = {...authData, ...{players: {}, isRoomLeader: true}};
            }
            else {
                authData = {...authData, ...{players: games[data.room].getPlayersInfo(), isRoomLeader: false}};
            }
            connectPlayer(socket, data);
            callback(authData);
        }
        else {
            callback({isConnected: false, reasons: authData['reasons']});
            socket.disconnect();
        }



    });
}

module.exports = { handleRoomConnection: handleRoomConnection };