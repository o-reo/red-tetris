export const connectToRoom = (socket, dispatch) => {
    socket.on("opponent connection", function (player) {
        console.log(player, "joined the game.");
    });
    socket.on("opponent disconnection", function (player) {
        console.log(player, "left the game.");
    });
};