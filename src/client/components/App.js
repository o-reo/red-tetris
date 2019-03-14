import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import Game from '../containers/Game';
import GameController from "../containers/GameController";
import GameWatcher from "./GameWatcher";
import JoinRoom from "../containers/JoinRoom";
import Footer from '../components/Footer';

WebFont.load({google: {families: ["Permanent Marker", "Orbitron:black"]}});

const appStyle = {
    height: "100%"
};

const gameStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end"
};

const App = ({match: {params}, connectToRoom, username, room, isConnected}) => {
    useEffect(() => {
        connectToRoom(username, room);
    });
    return (
        <div style={appStyle}>
            {isConnected ?
                (
                    <div style={gameStyle}>
                        <GameWatcher/>
                        <Game/>
                        <GameController/>
                    </div>
                ) :
                (<JoinRoom/>)
            }
            <Footer/>
        </div>
    )
};

export default App;