import React from 'react';
import './Board.css';
import Square from "./Square";

function Board(board) {
    return (
        <div className="board">
            {
                board.board.map((square, index) =>
                    <Square
                        key={index}
                        index={index}
                        color={square.color}
                    />)
            }
        </div>
    );
}

export default Board;