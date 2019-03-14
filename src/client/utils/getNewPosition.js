import { TOP, BOTTOM, LEFT, RIGHT } from "./direction";

const getNewPosition = (position, direction) => {
    let newPosition = position.map((pos) => {
        switch (direction) {
            case TOP:
                return ({ column: pos.column, row: pos.row - 1 });
            case BOTTOM:
                return ({ column: pos.column, row: pos.row + 1 });
            case LEFT:
                return ({ column: pos.column - 1, row: pos.row });
            case RIGHT:
                return ({ column: pos.column + 1, row: pos.row });
            default:
                return (pos);
        }
    });
    return (newPosition);
};

export default getNewPosition;