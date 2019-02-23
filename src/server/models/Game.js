import Piece from "./Piece";

class Game {
    constructor(id) {
        this.id = id;
        this.Pieces = [];
    }

    appendPiece() {
        const index =  Math.floor(Math.random() * Math.floor(7));
        this.Pieces.push(Piece(index));
    }
}

module.exports = Game;