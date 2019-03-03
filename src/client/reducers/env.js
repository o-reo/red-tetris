import {
    JOIN_ROOM,
    JOIN_ROOM_SUCCESS,
    JOIN_ROOM_REQUEST,
    JOIN_ROOM_FAILURE,
    OPPONENT_JOIN_ROOM,
} from "../actions/joinRoom";

import {
    joinRoom,
    joinRoomRequest,
    joinRoomSuccess,
    joinRoomFailure,
    opponentJoinRoom
} from "./joinRoom";

const initialState = () => {
    return ({
        socket: null,
        username: null,
        room: null,
        isConnected: false,
        isConnecting: false,
        isRoomLeader: false,
        opponent1: null,
        opponent2: null,
        opponent3: null
    });
};

const env = (state = initialState(), action) => {
    switch (action.type) {
        case JOIN_ROOM:
            return joinRoom(state);
        case JOIN_ROOM_REQUEST:
            return joinRoomRequest(state);
        case JOIN_ROOM_SUCCESS:
            return joinRoomSuccess(state, action);
        case JOIN_ROOM_FAILURE:
            return joinRoomFailure(state);
        case OPPONENT_JOIN_ROOM:
            return opponentJoinRoom(state, action);
        default:
            return (state);
    }
};

export default env;