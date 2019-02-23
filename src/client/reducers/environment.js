import { JOIN_ROOM } from "../actions";

const initialState = () => {
    return ({
       userName: null,
       room: null
    });
};

const joinRoom = (state, userName, room) => {
    let newState = Object.assign({}, state);
    newState.userName = userName;
    newState.room = room;
    return (newState);
};

const environment = (state = initialState(), action) => {
    switch (action.type) {
        case JOIN_ROOM:
            return joinRoom(state, action.userName, action.room);
        default:
            return (state);
    }
};

export default environment;