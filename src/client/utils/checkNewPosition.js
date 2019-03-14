import { AGAINST_SIDE, ALREADY_TAKEN, BOTTOM, LEFT, RIGHT, TOP } from "./direction";

const positionWrong = (type, side) => ({type: type, side: side});

const checkNewPosition = (oldPosition, newPosition, board) => {
    try {
        newPosition.forEach((position) => {
            if (position.row < 0) {
                throw positionWrong(AGAINST_SIDE, TOP);
            }
            else if (position.row > 19) {
                throw positionWrong(AGAINST_SIDE, BOTTOM);
            }
            else if (position.column < 0) {
                throw positionWrong(AGAINST_SIDE, LEFT);
            }
            else if (position.column > 9) {
                throw positionWrong(AGAINST_SIDE, RIGHT);
            }
            else if (board[position.row * 10 + position.column].color !== "white") {
                throw positionWrong(ALREADY_TAKEN,null);
            }
        });
    } catch (e) {
        return (e);
    }
    return (true);
};

export default checkNewPosition;