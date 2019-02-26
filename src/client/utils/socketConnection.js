export const socketConnection = (socket, username, room) => {

    window.onhashchange = function() {
        socket.emit("forceDisconnect",  { username: username, room: room });
    };

    socket.on("user connection", function (data) {
        console.log(data);
    });
};