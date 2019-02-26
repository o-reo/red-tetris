import { JOIN_ROOM, JOIN_ROOM_SUCCESS, JOIN_ROOM_REQUEST, JOIN_ROOM_FAILURE } from "../actions/joinRoom";
import { joinRoom, joinRoomRequest, joinRoomSuccess, joinRoomFailure } from "./joinRoom";

const initialState = () => {
    return ({
        username: null,
        room: null,
        isConnected: false,
        isConnecting: false,
        isDisconnecting: false,
        userNameAlreadyTaken: false,
        opponents: {},
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
        default:
            return (state);
    }
};

export default env;