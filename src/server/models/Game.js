const Piece = require("../models/Piece");
const Player = require("../models/Player");

class Game {
    constructor(name) {
        this.name = name;
        this.players = {};
        this.playerList = [];
        this.Pieces = [];
        this.gameIsStarted = false;
        this.addPieces(5);
    }

    addPiece() {
        const index =  Math.floor(Math.random() * Math.floor(7));
        this.Pieces.push(new Piece(index));
    }

    addPieces(number) {
        for (let i = 0; i < number; i++) {
            this.addPiece();
        }
    }

    addPlayer(playerName, socket) {
        this.players[playerName] = (new Player(playerName, socket));
        this.playerList.push(playerName);
    }

    deletePlayer(playerName) {
        this.players[playerName].socket.broadcast.emit("opponent disconnection", playerName);
        this.players[playerName].socket.disconnect();
        delete this.players[playerName];
        this.playerList = this.playerList.filter(function(player)  {
            return (player !== playerName);
        });
    }

    getOpponentList(playerName) {
        const opponentList = this.playerList.filter(function(name) {
            return (name !== playerName);
        });
        return (opponentList);
    }
}

module.exports = Game;