import { updateRoom } from "../actions/env";
import { askPiece } from "../actions/game";

export const connectToRoom = (socket, dispatch) => {
    // Handle opponent connection and disconnection
    socket.on("opponent connection", (data) => {
        dispatch(updateRoom(data.players, data.leaderName));
    });
    socket.on("opponent disconnection", (data) => {
        dispatch(updateRoom(data.players, data.leaderName));
    });

    // Handle party launching
    socket.on("launch party", () => {
        dispatch(askPiece());
    });
};