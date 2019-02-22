import React from 'react';
import { connect } from 'react-redux';
import WebFont from 'webfontloader';
import Game from '../containers/Game';
import LogUser from '../containers/LogUser';
import Footer from '../components/Footer';

WebFont.load({ google: { families: ["Permanent Marker", "Orbitron:black"] } });

const appStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

function redirectToRoom(urlParams) {
    if (urlParams.room === "room" && urlParams.player === "player") {
        return (true);
    } else {
        return (false);
    }
}

const App = ({match: {params}}) => {
    return (
        <div style={appStyle}>
            {
                redirectToRoom(params) ?
                    (<Game/>)
                    :
                    (<LogUser/>)
            }
            <Footer/>
        </div>
    )
};

export default connect()(App);