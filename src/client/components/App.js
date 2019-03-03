import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import Game from '../containers/Game';
import OtherPlayer from '../components/otherPlayers';
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

const App = ({match: {params}, connectToRoom, username, room, isConnected, playersList}) => {
    useEffect(() => {
        connectToRoom(username, room);
    });
    return (
        <div style={appStyle}>
            {/*<div>*/}

                {/*{*/}
                    {/*playersList.map((player, index) => (*/}
                        {/*<OtherPlayer username={player} key={index} />*/}
                    {/*))*/}

                {/*}*/}

            {/*</div>*/}
            {isConnected ?
                (<Game/>) :
                (<JoinRoom/>)
            }
            <Footer/>
        </div>
    )
};

export default App;