import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import WebFont from 'webfontloader';
import Game from '../containers/Game';
import JoinRoom from "../containers/JoinRoom";
import Footer from '../components/Footer';

WebFont.load({google: {families: ["Permanent Marker", "Orbitron:black"]}});

const appStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const App = ({match: {params}, connectToRoom, username, room, isConnected}) => {
    useEffect(() => {
        connectToRoom(username, room);
    });
    return (
        <div style={appStyle}>
            {isConnected ?
                (<Game/>) :
                (<JoinRoom/>)
            }
            <Footer/>
        </div>
    )
};

export default connect()(App);