const Piece = require("../models/Piece");

class Game {
    constructor(name) {
        this.name = name;
        this.players = [];
        this.Pieces = [];
        for (let i = 0; i < 3; i++) {
            this.addPiece();
        }
    }

    addPiece() {
        const index =  Math.floor(Math.random() * Math.floor(7));
        this.Pieces.push(new Piece(index));
    }

    addPlayer(playerName) {
        this.players.push(playerName);
    }

    deletePlayer(playerName) {
        this.players = this.players.filter(function(player)  {
           return (player !== playerName);
        });
    }
}

module.exports = Game;