import React from 'react';
import WebFont from 'webfontloader';
import logo from "../assets/Le-101.png";
import logo_42 from "../assets/42_lyon.png";

WebFont.load({
    google: {
        families: ["Permanent Marker"]
    }
});

const footerStyle = {
    width: "100%",
    height: "14.24vh",
    padding: "-3vh",
    display: "flex",
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
    height: "6vh",
    marginLeft: "10vh"
};

const Footer = () => (
    <div style={footerStyle}>
        <p style={fontStyle}>befuhro & gmadec</p>
        <img src={logo_42} style={imageStyle} alt="42_lyon-logo" />
    </div>
);

export default Footer;