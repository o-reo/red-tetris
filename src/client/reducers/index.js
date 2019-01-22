import { combineReducers } from 'redux';
import { CHANGE_COLOR } from '../actions/changeColor.js';

function initialState() {
    return {
        board: Array(200).fill({color: ""}),
        current: null
    }
}

function modifySquare(state, index, color) {
    let newState = Object.assign({}, state);
    newState.board[index] = {color: color};
    return (newState);
}

function game(state = initialState(), action) {
    switch (action.type) {
        case CHANGE_COLOR:
        {
            return modifySquare(state, action.index, action.color);
        }
        default:
            return state;
    }
}

const tetrisApp = combineReducers({
    game
});

export default tetrisApp;