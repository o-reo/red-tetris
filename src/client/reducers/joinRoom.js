import clone from "lodash/clone";

export const joinRoom = (state) => {
    let newState = clone(state);
    return (newState);
};

export const joinRoomRequest = (state) => {
    let newState = clone(state);
    newState.isConnecting = true;
    return (newState);
};

export const joinRoomSuccess = (state, action) => {
    let newState = clone(state);
    newState.isConnecting = false;
    newState.isConnected = true;
    newState.username = action.username;
    newState.room = action.room;
    newState.socket = action.socket;
    newState.players = action.players;
    newState.isRoomLeader = action.isRoomLeader;
    newState.opponent1 = null;
    newState.opponent2 = null;
    newState.opponent3 = null;
    return (newState);
};

export const joinRoomFailure = (state) => {
    let newState = clone(state);
    newState.isConnecting = false;
    newState.isConnected = false;
    return (newState);
};

export const leaveRoom = (state) => {
    let newState = clone(state);
    newState.isConnecting = false;
    newState.isConnected = false;
    newState.username = null;
    newState.room = null;
    newState.socket = null;
    newState.players = null;
    newState.isRoomLeader =false;
    newState.opponent1 = null;
    newState.opponent2 = null;
    newState.opponent3 = null;
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