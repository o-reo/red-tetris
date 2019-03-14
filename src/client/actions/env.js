import io from "socket.io-client";
import { connectToRoom } from "../utils/socketConnection";
import { fetchPieces } from "./game";

export const JOIN_ROOM = "JOIN_ROOM";
export const env = (username, room) => {
    return ((dispatch) => {
        dispatch(joinRoomRequest());
        const socket = io('http://localhost:8080/room');
        socket.on("connect", () => {
            socket.emit('join room', { username: username, room: room }, (data) => {
                if (data.connected === true) {
                    connectToRoom(socket, dispatch);
                    dispatch(joinRoomSuccess(username, room, socket, data.players, data.isRoomLeader));
                    dispatch(fetchPieces());
                    window.onhashchange = () => {
                        dispatch(leaveRoom());
                        socket.disconnect();
                    };
                }
                else {
                    dispatch(joinRoomFailure("username could'nt be connected."));
                }
            });
        });
    });
};

export const JOIN_ROOM_REQUEST = "JOIN_ROOM_REQUEST";
export const joinRoomRequest = () => ({ type: JOIN_ROOM_REQUEST });

export const JOIN_ROOM_FAILURE = "JOIN_ROOM_FAILURE";
export const joinRoomFailure = (error) => ({ type: JOIN_ROOM_FAILURE, error: error });

export const JOIN_ROOM_SUCCESS = "JOIN_ROOM_SUCCESS";
export const joinRoomSuccess = (username, room, socket, players, isRoomLeader) =>
    ({ type: JOIN_ROOM_SUCCESS, username: username, room: room, socket: socket,
        players: players, isRoomLeader: isRoomLeader });

export const LEAVE_ROOM = "LEAVE_ROOM";
export const leaveRoom = () => ({ type: LEAVE_ROOM });

export const UPDATE_ROOM = "UPDATE_ROOM";
export const updateRoom = (players, leaderName) =>
    ({ type: UPDATE_ROOM, players: players, leaderName: leaderName });
