import clone from "lodash/clone";

export const joinRoomSuccess = (state, action) => {
    let newState = clone(state);

    newState.username = action.username;
    newState.room = action.room;
    newState.socket = action.socket;
    newState.players = action.players;
    newState.isRoomLeader = action.isRoomLeader;
    return (newState);
};

export const joinRoomFailure = (state, action) => {
    let newState = clone(state);

    newState.errors = action.errors;
    return (newState);
};

export const updateRoom = (state, action) => {
    let newState = clone(state);

    newState.players = action.players;
    if (action.leaderName === state.username) {
        newState.isRoomLeader = true;
    }
    return (newState);
};
