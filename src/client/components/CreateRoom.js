import React from 'react';
import Footer from '../components/Footer';

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


const CreateRoom = () => (
    <div style={appStyle}>
        <div style={errorMessage}>

        </div>
        <Footer/>
    </div>
);

export default CreateRoom