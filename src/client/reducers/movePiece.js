import cloneDeep from "lodash/cloneDeep";
import getNewPosition from "../utils/getNewPosition";

export const movePiece = (state, direction) => {
    let newState = cloneDeep(state);
    newState.current.lastMove = Math.floor(Date.now() / 100);
    newState.current.position = getNewPosition(state.current.position, direction);
    return (newState);
};