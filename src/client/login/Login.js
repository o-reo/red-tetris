import React from 'react';

const fontStyle = {
    margin: '3vh 0 1vh 0',
    color: '#61dafb',
    fontFamily: 'Permanent Marker',
    fontSize: '3vh',
    fontWeight: '300',
    textAlign: 'center',
};

const buttonStyle = {
    width: '15vh',
    marginTop: '1vh',
    fontSize: '2vh',
    fontWeight: '300',
    textAlign: 'center',
};

function joinRoom() {
    const userName = document.getElementById("username").value;
    const room = document.getElementById("room").value;
    window.location.href = "http://localhost:3000/#" + room + "[" + userName + "]";
}

function Login() {
    return (
        <div>
            <form onSubmit={joinRoom}>
                <label style={fontStyle}>
                    ENTER A USERNAME
                    <input type="text"  id="username" required />
                </label>
                <label style={fontStyle}>
                    ENTER A ROOM
                    <input type="text" id="room" required />
                </label>
                <button style={buttonStyle} type="submit">Join game</button>
            </form>
        </div>
    );
}

export default Login;