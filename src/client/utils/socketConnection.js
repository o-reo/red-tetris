// import { updateRoom } from "../Store/Actions/Env";
import { updateRoom } from "../app/room/roomActions";
import { askPiece } from "../Store/Actions/Game";

export const roomConnection = (socket, dispatch) => {

    // Handle opponent connection and disconnection
    socket.on("opponent connection", (data) => {
        console.log(data)
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