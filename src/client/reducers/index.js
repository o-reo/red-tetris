import { combineReducers } from 'redux';

function initialState() {
    return {
        board: Array(200).fill({color: "white", type: "static"}),
        current: null
    }
}

function refreshBoard(state) {
    let newState = Object.assign({}, state);
    state.board[4] = {color: "red", type: "movin"};
    state.board[14] = {color: "red", type: "movin"};
    state.board[24] = {color: "red", type: "movin"};
    state.board[34] = {color: "red", type: "movin"};
    return newState;
}

function tetris(state = initialState(), action) {
    switch (action.type) {
        case 'create_tetri':
        {
            return refreshBoard(state);
        }
        default:
            return state;
    }
}

const tetrisApp = combineReducers({
    tetris
});

export default tetrisApp;