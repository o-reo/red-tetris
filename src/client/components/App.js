import React from 'react';
import {connect} from 'react-redux';
import WebFont from 'webfontloader';
import Game from '../containers/Game';
import Footer from '../components/Footer';

WebFont.load({google: {families: ["Permanent Marker", "Orbitron:black"]}});

const appStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const App = ({match: {params}}) => {
    return (
        <div style={appStyle}>
            <Game room={params.room} player={params.player} />
            <Footer />
        </div>
    )
};

export default connect()(App);