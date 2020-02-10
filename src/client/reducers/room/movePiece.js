import getNewPosition from "../../utils/getNewPosition";

export const movePiece = (state, action) => ({
    ...state, ...{
        current: {
            ...state.current,
            lastMove: Math.floor(Date.now() / 100),
            position: getNewPosition(state.current.position, action.direction)
        }
    }
});
