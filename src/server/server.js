const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server, { pingTimeout: 30000 });

const gameController = require("./controller/games");

const port = 8080;

server.listen(port, "localhost", (err) => {
	if (err) {
		console.log('Server failed to launch');
		return;
	}
	console.log('Server listening on port ' + port);
});

const room = io.of("/room");

room.on("connection", (socket) => { gameController.handleRoomConnection(socket)});
