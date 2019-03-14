class Player {
    constructor(username, socket) {
        this.username = username;
        this.socket = socket;
        this.spectrum = [];
    }
}

module.exports = Player;