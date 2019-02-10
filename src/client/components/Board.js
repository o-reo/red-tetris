import React from 'react';
import Square from "./Square";

const boardStyle = {
    width: "30vh",
    height: "60vh",
    display: "flex",
    flexWrap: "wrap",
    borderColor: "#0f1423",
    borderWidth: "2vh 2vh 1vh 2vh",
    borderRadius: "1vh 1vh 0 0",
    borderStyle: "inset"
};

const Board = (props) => (
<div style={boardStyle}>
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

export default Board;