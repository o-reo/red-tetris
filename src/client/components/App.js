import React from 'react';
import {connect} from 'react-redux';
import WebFont from 'webfontloader';
import Game from '../components/Game';
import Footer from '../components/Footer';

WebFont.load({
    google: {
        families: ["Permanent Marker"]
    }
});

const appStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const errorMessage = {
    width: "35vh",
    height: "10vh",
    margin: "32.9vh",
    padding: "5vh",
    backgroundColor: '#0b1d2d',
    color: "#61dafb",
    fontFamily: "Permanent Marker",
    fontSize: "3vh",
    fontWeight: "300",
    textAlign: "center",
};

function redirectToRoom(urlParams)
{
    if (urlParams.room === "room" && urlParams.player === "player") {
        return (true);
    }
    else {
        return (false);
    }
}

const App = ({match}) => {

    if (redirectToRoom(match.params) === true) {
        return (
            <div style={appStyle}>
                <Game/>
                <Footer/>
            </div>
        )
    }
    else {
        return (
            <div style={appStyle}>
                <p style={errorMessage}>You are not authentificated!</p>
                <Footer/>
            </div>
        )
    }
};

export default connect()(App);