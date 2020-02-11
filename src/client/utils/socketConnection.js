import { updateRoom, askPiece, updateSpectrum } from "../actions/room";

export const roomConnection = (socket, dispatch) => {
    // Handle opponent connection and disconnection
    socket.on("opponent connection", (data) => {
        console.log(data);
        dispatch(updateRoom(data.players, data.leaderName));
    });
    socket.on("opponent disconnection", (data) => {
        dispatch(updateRoom(data.players, data.leaderName));
    });

    socket.on('new spectrum', (data) => dispatch(updateSpectrum(data.username, data.spectrum)));

    // Handle party launching
    socket.on("launch party", () => {
        dispatch(askPiece());
    });
};
