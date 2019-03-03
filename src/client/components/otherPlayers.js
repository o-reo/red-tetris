import React from 'react';

const otherPlayerStyle = {
    width: "30vh",
    backgroundColor: "white",
    height: "3vh",
    display: "flex",
    flexWrap: "wrap",
};

const fontStyle = {
    color: "black"
};

const OtherPlayer = ({ username }) => (
    <div style={ otherPlayerStyle }>
        <p style={fontStyle}>{username}</p>
    </div>
);

// Board.propTypes = {
//     board: PropTypes.arrayOf(
//         PropTypes.shape({
//             color: PropTypes.string.isRequired,
//             row: PropTypes.number.isRequired,
//             column: PropTypes.number.isRequired,
//         }).isRequired
//     ).isRequired
// };

export default OtherPlayer;