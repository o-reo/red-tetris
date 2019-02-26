import io from "socket.io-client";
import { socketConnection } from "../utils/socketConnection";

export const JOIN_ROOM = 'JOIN_ROOM';
export const joinRoom = (username, room) => {
    return (function(dispatch) {
        dispatch(joinRoomRequest());
        const socket = io('http://localhost:8080/room');
        socket.on("connect", function () {
            socket.emit('join room', { username: username, room: room }, function (data) {
                if (data.connected === true) {
                    socketConnection(socket, username, room);
                    dispatch(joinRoomSuccess(username, room));
                }
                else {
                    dispatch(joinRoomFailure("username could'nt be connected."));
                }
            });
        })
    })
};

export const JOIN_ROOM_REQUEST = "JOIN_ROOM_REQUEST";
export const joinRoomRequest = () => ({ type: JOIN_ROOM_REQUEST });

export const JOIN_ROOM_FAILURE = "JOIN_ROOM_FAILURE";
export const joinRoomFailure = (error) => ({ type: JOIN_ROOM_FAILURE, error: error });

export const JOIN_ROOM_SUCCESS = "JOIN_ROOM_SUCCESS";
export const joinRoomSuccess = (username, room) => ({ type: JOIN_ROOM_SUCCESS, username: username, room: room });