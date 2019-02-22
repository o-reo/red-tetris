import React from 'react';

const blocStyle = {
    width: "35vh",
    height: "15vh",
    margin: "32.9vh",
    padding: "5vh",
    backgroundColor: '#0b1d2d',
    display: "flex",
    flexDirection: "column",
};

const fontStyle = {
    color: "#61dafb",
    fontFamily: "Permanent Marker",
    fontSize: "3vh",
    fontWeight: "300",
    textAlign: "center",
};

const LogUser = () => (
    <div style={ blocStyle } >
        <p style={ fontStyle } >ENTER A USERNAME</p>
        <input type={ "text" } id={ "username" } />
    </div>
);

export default LogUser