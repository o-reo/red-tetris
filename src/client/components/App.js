import React from 'react';
import {connect} from 'react-redux';
import Game from '../components/Game';
import Footer from '../components/Footer';

const appStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const App = () => (
<div style={appStyle}>
    <Game/>
    <Footer/>
</div>
);

export default connect()(App);