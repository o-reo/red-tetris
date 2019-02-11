import React from 'react';
import Square from "./Square";
import PropTypes from "prop-types"

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

const Board = ({board}) => (
<div style={boardStyle}>
    {
        board.map((square, index) =>
            <Square
                key={index}
                index={index}
                color={square.color}
            />)
    }
</div>
);

Board.propTypes = {
    board: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string.isRequired,
            row: PropTypes.number.isRequired,
            column: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
};

export default Board;