import React from 'react';
import {connect} from 'react-redux';
import WebFont from 'webfontloader';
import logo from "../assets/Le-101.png";

WebFont.load({
    google: {
        families: ["Permanent Marker"]
    }
});

const footerStyle = {
    width: "100%",
    padding: "-3vh",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(rgba(53, 58, 73, 0.7), rgba(11, 29, 45, 1))",
    color: "#61dafb",
};

const fontStyle = {
    fontFamily: "Permanent Marker",
    fontSize: "3vh",
    fontWeight: "300",
    color: "#61dafb",
    marginRight: "2vh"
};

const imageStyle = {
    height: "10vh",
    marginLeft: "2vh"
};

const Footer = () => (
    <div style={footerStyle}>
        <p style={fontStyle}>befuhro & gmadec</p>
        <img src={logo} style={imageStyle}/>
    </div>
);

export default Footer;