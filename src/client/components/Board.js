import React from 'react';
import './Board.css';
import Square from "./Square";

function Board(props) {
    return (
        <div className="board">
            {
                props.board.map((square, index) =>
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