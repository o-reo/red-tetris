const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);

io.on('connection', function (socket) {
	socket.on('join room', function (data) {
		console.log(data);
	});
});