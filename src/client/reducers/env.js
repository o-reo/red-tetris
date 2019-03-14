import {
    JOIN_ROOM,
    JOIN_ROOM_SUCCESS,
    JOIN_ROOM_REQUEST,
    JOIN_ROOM_FAILURE,
    UPDATE_ROOM,
    LEAVE_ROOM
} from "../actions/env";

import {
    joinRoom,
    joinRoomRequest,
    joinRoomSuccess,
    joinRoomFailure,
    updateRoom,
    leaveRoom
} from "./joinRoom";

const initialState = () => ({
    socket: null,
    username: null,
    room: null,
    isConnected: false,
    isConnecting: false,
    isRoomLeader: false,
    players: null,
    opponent1: null,
    opponent2: null,
    opponent3: null
});

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
        case UPDATE_ROOM:
            return updateRoom(state, action);
        case LEAVE_ROOM:
            return leaveRoom(state);
        default:
            return (state);
    }
};

export default env;