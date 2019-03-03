export const joinRoom = (state) => {
    let newState = Object.assign({}, state);
    return (newState);
};

export const joinRoomRequest = (state) => {
    let newState = Object.assign({}, state);
    newState.isConnecting = true;
    return (newState);
};

export const joinRoomSuccess = (state, action) => {
    let newState = Object.assign({}, state);
    newState.isConnecting = false;
    newState.isConnected = true;
    newState.username = action.username;
    newState.room = action.room;
    newState.opponents = [];
    return (newState);
};

export const joinRoomFailure = (state) => {
    let newState = Object.assign({}, state);
    newState.isConnecting = false;
    newState.isConnected = false;
    return (newState);
};

export const leaveRoom = (state) => {
    let newState = Object.assign({}, state);
    newState.isConnected = false;
    newState.username = null;
    newState.room = null;
    return (newState);
};

export const opponentJoinRoom = (state, action) => {
    let newState = Object.assign({}, state);
    let newPlayerList =  Object.assign([], state.playerList);
    newPlayerList = action.opponentName;
    return (newState);
};