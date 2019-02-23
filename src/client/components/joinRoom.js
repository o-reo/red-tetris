import React from 'react';
import PropTypes from "prop-types"

const blocStyle = {
    width: "35vh",
    height: "28vh",
    margin: "32.9vh",
    padding: "2vh",
    backgroundColor: '#0b1d2d',
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const fontStyle = {
    margin: "3vh 0 1vh 0",
    color: "#61dafb",
    fontFamily: "Permanent Marker",
    fontSize: "3vh",
    fontWeight: "300",
    textAlign: "center",
};

const buttonStyle = {
    width: "15vh",
    marginTop: "1vh",
    fontSize: "2vh",
    fontWeight: "300",
    textAlign: "center",
};

const JoinRoom = ({ onClick }) => (
    <div style={ blocStyle } >
        <p style={ fontStyle } >ENTER A USERNAME</p>
        <input type={ "text" } id={ "username" } />
        <p style={ fontStyle } >ENTER A ROOM</p>
        <input type={ "text" } id={ "room" } />
        <button id={ "button" } style={ buttonStyle } onClick={ () => {
            onClick();
        }} >Join game</button>
    </div>
);

JoinRoom.Proptype = {
  onClick: PropTypes.func.isRequired,
};

export default JoinRoom