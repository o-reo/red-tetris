class Player {
    constructor(username, socket) {
        this.username = username;
        this.socket = socket;
        this.spectrum = [];
        for (let i = 0; i < 20; i++) {
            this.spectrum[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
    }

    updateSpectrum(spectrum) {
        console.log('Username: ', this.username);
        console.log('New spectrum: ');
        console.log(spectrum);
    }
}

module.exports = Player;
